// const user = {
//     name: "Phong",
//     age: 20
// };
// const information = {
//     role: "admin",
//     active: true
// };

// const merge={
//     ...user,
//     ...information
// }
// console.log(merge)
const user = {
    id: 1,
    name: "Phong",
    age: 20,
};
const{name:username,age,role='user'}=user

console.log(role)