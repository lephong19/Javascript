const user = {
    id: 1,
    name: "Phong",
    age: 20,
    role: "admin"
};

// Dùng destructuring + rest để tạo
// {
//     name: "Phong",
//     age: 20,
//     role: "admin"
// }

const {id , ...rest}=user
const obj={...rest}
console.log(obj)