const products = [
    { id: 1, name: "Laptop", price: 2000, stock: 5, category: "electronics" },
    { id: 2, name: "Mouse", price: 20, stock: 0, category: "electronics" },
    { id: 3, name: "Keyboard", price: 50, stock: 10, category: "electronics" },
    { id: 4, name: "Book", price: 15, stock: 20, category: "education" },
    { id: 5, name: "Laptop", price: 5, stock: 100, category: "education" }
];
function tongGiaTri(products){
    // valite
    return products.reduce((acc,product)=>{
        return acc += product.price*product.stock
    },0)
}
function timSPPriceMax(products){
    //valite
    return products.reduce((acc,product)=>{
        return acc.price<product.price?product:acc
    },products[0])
}
function SPConHang(products){
    //valite
    return products.filter(x=>x.stock>0)
}
function tenSpConHang(products){
    //valite
    return products
    .filter(x=>x.stock>0)
    .map(x=>x.name)
}
function searchProducts(products,keyword){
    //valite

    let res=[]
    for(let x of products){
        if(x.name.toUpperCase().includes(keyword.toUpperCase())){
            res.push(x)
        }
    }
    return res
}
function valite(product){
    if(!product || typeof product!=='object' || Array.isArray(product))
        throw new Error('Loi product')
    if("id" in product && (!Number.isInteger(product.id) ||
        typeof product.id !=='number' ||product.id<=0))
        throw new Error('Loi id')

   if (
    'name' in product &&
    (
        typeof product.name !== 'string' ||
        product.name.trim() === ''
    )
)

    if('minPrice' in product &&(!Number.isInteger(product.minPrice)||
        product.minPrice<=0 || typeof product.minPrice!=='number'))
        throw new Error('Loi minPrice')
    
    
    if('maxPrice' in product &&(!Number.isInteger(product.maxPrice)||
        product.maxPrice<=0 || typeof product.maxPrice!=='number'))
        throw new Error('Loi maxPrice')

    if(('minPrice' in product && 'maxPrice' in product) &&(
        product.minPrice>product.maxPrice
    ))
    throw new Error('Loi min/max Price')

    
    
    if (
        "inStock" in product &&
        typeof product.inStock !== "boolean"
    )
        throw new Error("Loi inStock");


    if (
    'category' in product &&
    (
        typeof product.category !== 'string' ||
        product.category.trim() === ''
    )
)
      throw new Error('Loi category')
}

function searchProductsWithOptions(products,options){
    if(!Array.isArray(products) || products.length===0)
        throw new Error('Loi products')

    valite(options)

    let res=[]
    for(let x of products){
        if('id' in options && (x.id!==options.id))
            continue

        if('name' in options && !x.name.toUpperCase().includes(options.name.toUpperCase()))
            continue

        if('category' in options &&
            x.category!==options.category)
        continue

          if (
            "minPrice" in options &&
            x.price < options.minPrice
        )
            continue;

        // maxPrice
        if (
            "maxPrice" in options &&
            x.price > options.maxPrice
        )
            continue;

            if (
            "inStock" in options &&
            options.inStock === true &&
            x.stock <= 0
        )
            continue;

        if (
            "inStock" in options &&
            options.inStock === false &&
            x.stock !== 0
        )
            continue;
            res.push(x)
    }
    return res
}
function sortProducts(products, type) {
    if (!Array.isArray(products)) {
        throw new Error("Loi products");
    }

    const result = [...products];

    switch (type) {
        case "price-asc":
            return result.sort((a, b) => a.price - b.price);

        case "price-desc":
            return result.sort((a, b) => b.price - a.price);

        case "stock-asc":
            return result.sort((a, b) => a.stock - b.stock);

        case "stock-desc":
            return result.sort((a, b) => b.stock - a.stock);

        case "name-asc":
            return result.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

        case "name-desc":
            return result.sort((a, b) =>
                b.name.localeCompare(a.name)
            );

        default:
            throw new Error("Loi type sort");
    }
}
console.log(sortProducts(products,"price-asc"))

