// Thực tế API có thể trả hàng triệu user một lần nên dữ liệu rất lớn
// Thay vào đó chia thành các trang 
const users = [
    { id: 1, name: "Phong" },
    { id: 2, name: "An" },
    { id: 3, name: "Nam" },
    { id: 4, name: "Lan" },
    { id: 5, name: "Minh" },
    { id: 6, name: "Huy" },
    { id: 7, name: "Khoa" },
    { id: 8, name: "Linh" },
    { id: 9, name: "Tuan" },
    { id: 10, name: "Mai" },
    { id: 11, name: "Duc" },
    { id: 12, name: "Hoa" }
];
function paginate(users, page, limit) {
    if (!Array.isArray(users)) {
        throw new Error("Loi users");
    }

    if (!Number.isInteger(page) || page <= 0) {
        throw new Error("Loi page");
    }

    if (!Number.isInteger(limit) || limit <= 0) {
        throw new Error("Loi limit");
    }

    const start = (page - 1) * limit;

    return users.slice(start, start + limit);
}
console.log(paginate(users,2,5))