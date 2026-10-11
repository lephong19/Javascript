
const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");

const file = path.join(__dirname, "order.json");

// ==================== FILE ====================

async function getFile() {
    try {
        const data = await fs.readFile(file, "utf-8");
        const orders = JSON.parse(data);

        if (!Array.isArray(orders)) {
            throw new Error("du_lieu_order_khong_hop_le");
        }

        return orders;
    } catch (err) {
        if (err.code === "ENOENT") {
            await saveFile([]);
            return [];
        }

        throw err;
    }
}

async function saveFile(data) {
    if (!Array.isArray(data)) {
        throw new Error("du_lieu_phai_la_mang");
    }

    await fs.writeFile(
        file,
        JSON.stringify(data, null, 2),
        "utf-8"
    );
}

// ==================== PRODUCT ====================

class Product {
    #price;

    constructor(name, price) {
        if (typeof name !== "string" || name.trim() === "") {
            throw new Error("loi_ten_san_pham");
        }

        if (
            typeof price !== "number" ||
            !Number.isSafeInteger(price) ||
            price <= 0
        ) {
            throw new Error("loi_gia_san_pham");
        }

        this.id = randomUUID();
        this.name = name.trim();
        this.#price = price;
    }

    getPrice() {
        return this.#price;
    }
}

// ==================== PRODUCT CATALOG ====================

class ProductCatalog {
    #products = [];

    constructor(products = []) {
        if (!Array.isArray(products)) {
            throw new Error("danh_sach_san_pham_khong_hop_le");
        }

        for (const item of products) {
            if (!(item.product instanceof Product)) {
                throw new Error("san_pham_khong_hop_le");
            }

            if (
                !Number.isSafeInteger(item.stock) ||
                item.stock < 0
            ) {
                throw new Error("ton_kho_khong_hop_le");
            }
        }

        this.#products = products.map(item => ({
            product: item.product,
            stock: item.stock
        }));
    }

    getProductById(productId) {
        return this.#products.find(
            item => item.product.id === productId
        )?.product;
    }

    getStock(productId) {
        const item = this.#products.find(
            entry => entry.product.id === productId
        );

        return item ? item.stock : null;
    }

    getProducts() {
        return this.#products.map(item => ({
            product: item.product,
            stock: item.stock
        }));
    }

    reduceStock(productId, quantity) {
        const item = this.#products.find(
            entry => entry.product.id === productId
        );

        if (!item) {
            throw new Error("khong_tim_thay_san_pham");
        }

        if (quantity > item.stock) {
            throw new Error("khong_du_hang");
        }

        item.stock -= quantity;
    }
}

// ==================== CART ITEM ====================

class CartItem {
    constructor(product, quantity) {
        if (!(product instanceof Product)) {
            throw new Error("san_pham_khong_hop_le");
        }

        if (
            !Number.isSafeInteger(quantity) ||
            quantity <= 0
        ) {
            throw new Error("so_luong_khong_hop_le");
        }

        this.product = product;
        this.quantity = quantity;
    }

    getSubtotal() {
        return this.quantity * this.product.getPrice();
    }

    toJSON() {
        return {
            productId: this.product.id,
            name: this.product.name,
            price: this.product.getPrice(),
            quantity: this.quantity,
            subtotal: this.getSubtotal()
        };
    }
}

// ==================== SHOPPING CART ====================

class ShoppingCart {
    #items = [];

    constructor(catalog) {
        if (!(catalog instanceof ProductCatalog)) {
            throw new Error("catalog_khong_hop_le");
        }

        this.catalog = catalog;
    }

    addProduct(productId, quantity) {
        if (
            !Number.isSafeInteger(quantity) ||
            quantity <= 0
        ) {
            throw new Error("so_luong_khong_hop_le");
        }

        const product = this.catalog.getProductById(productId);

        if (!product) {
            throw new Error("khong_tim_thay_san_pham");
        }

        const existingItem = this.#items.find(
            item => item.product.id === productId
        );

        const currentQuantity = existingItem
            ? existingItem.quantity
            : 0;

        const requestedTotal = currentQuantity + quantity;
        const stock = this.catalog.getStock(productId);

        if (requestedTotal > stock) {
            throw new Error("khong_du_hang");
        }

        if (existingItem) {
            existingItem.quantity = requestedTotal;
        } else {
            this.#items.push(new CartItem(product, quantity));
        }

        return this.getItems();
    }

    removeProduct(productId) {
        const index = this.#items.findIndex(
            item => item.product.id === productId
        );

        if (index === -1) {
            throw new Error("san_pham_khong_co_trong_gio");
        }

        this.#items.splice(index, 1);
    }

    getItems() {
        return this.#items.map(item => item.toJSON());
    }

    getTotal() {
        return this.#items.reduce(
            (total, item) => total + item.getSubtotal(),
            0
        );
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    // Chỉ xóa giỏ sau khi đơn hàng đã lưu thành công.
    clear() {
        this.#items = [];
    }

    // Tạo bản chụp CartItem để Order không phụ thuộc
    // vào các thay đổi sau này của giỏ hàng.
    createOrderItems() {
        return this.#items.map(item => item.toJSON());
    }
}

// ==================== ORDER ====================

class Order {
    constructor(customerName, customerEmail, items) {
        if (
            typeof customerName !== "string" ||
            customerName.trim() === ""
        ) {
            throw new Error("ten_khach_hang_khong_hop_le");
        }

        if (
            typeof customerEmail !== "string" ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail.trim())
        ) {
            throw new Error("email_khong_hop_le");
        }

        if (!Array.isArray(items) || items.length === 0) {
            throw new Error("don_hang_rong");
        }

        this.id = randomUUID();
        this.customerName = customerName.trim();
        this.customerEmail = customerEmail.trim().toLowerCase();
        this.items = items.map(item => ({ ...item }));
        this.total = this.items.reduce(
            (sum, item) => sum + item.subtotal,
            0
        );
        this.status = "pending";
        this.createdAt = new Date().toISOString();
    }

    toJSON() {
        return {
            id: this.id,
            customerName: this.customerName,
            customerEmail: this.customerEmail,
            items: this.items,
            total: this.total,
            status: this.status,
            createdAt: this.createdAt
        };
    }
}

// ==================== ORDER SERVICE ====================

async function createOrder(cart, customerName, customerEmail) {
    if (!(cart instanceof ShoppingCart)) {
        throw new Error("gio_hang_khong_hop_le");
    }

    if (cart.isEmpty()) {
        throw new Error("gio_hang_rong");
    }

    const items = cart.createOrderItems();

    // Validate thông tin và tạo đơn trước khi thay đổi tồn kho.
    const order = new Order(customerName, customerEmail, items);

    const previousOrders = await getFile();

    // Xác nhận lại tồn kho cho toàn bộ đơn trước khi trừ.
    const quantities = new Map();

    for (const item of items) {
        const current = quantities.get(item.productId) || 0;
        quantities.set(item.productId, current + item.quantity);
    }

    for (const [productId, quantity] of quantities) {
        const stock = cart.catalog.getStock(productId);

        if (stock === null) {
            throw new Error("khong_tim_thay_san_pham");
        }

        if (quantity > stock) {
            throw new Error("khong_du_hang");
        }
    }

    // Lưu đơn hàng trước. Chỉ sau khi ghi file thành công
    // mới giảm tồn kho trong bộ nhớ và xóa giỏ hàng.
    await saveFile([
        ...previousOrders,
        order.toJSON()
    ]);

    for (const [productId, quantity] of quantities) {
        cart.catalog.reduceStock(productId, quantity);
    }

    cart.clear();

    return order.toJSON();
}

// ==================== DEMO ====================

async function main() {
    const laptop = new Product("Laptop", 14000000);
    const keyboard = new Product("Keyboard Gaming", 1000000);
    const mouse = new Product("Mouse", 800000);

    const catalog = new ProductCatalog([
        { product: laptop, stock: 4 },
        { product: keyboard, stock: 10 },
        { product: mouse, stock: 17 }
    ]);

    const cart = new ShoppingCart(catalog);

    cart.addProduct(laptop.id, 2);
    cart.addProduct(mouse.id, 1);
    cart.addProduct(laptop.id, 1);

    console.log("Giỏ hàng:", cart.getItems());
    console.log("Tổng tiền:", cart.getTotal());

    const order = await createOrder(
        cart,
        "Nguyen Van A",
        "a@example.com"
    );

    console.log("Đơn hàng đã tạo:", order);
    console.log("Tồn kho laptop còn:", catalog.getStock(laptop.id));
    console.log("Giỏ hàng sau khi đặt:", cart.getItems());
}

main().catch(err => {
    console.error("Lỗi:", err.message);
});
