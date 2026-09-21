/*
const user = {
    name: "Phong",
    age: 20
};

const a = user;// Cùng tham chiếu đến Object {name:'Phong',age:20}

const b = { ...user };
// user -> Object A
// b -> Object A 
console.log(a===user) 
console.log(b===user) 
a.name='Â' // user.name cũng thay đổi vì a và user đều trỏ đến Object đó

console.log(user) 

//=================
const users = ["Phong", "An", "Nam"];

const a = users;
const b = [...users];
a.push('Minh')
b.push('Tuan')
console.log(users);//['Phong','An','Nam','Minh']

console.log(a);//['Phong','An','Nam','Minh']
console.log(b);//['Phong','An','Nam','Tuan']

console.log(a === users);//true
console.log(b === users);//false
 */

// const user = {
//     name: "Phong",
//     address: {
//         city: "Thu Duc"
//     }
// };

// const copy = { ...user };
// copy.name = "An";
// copy.address.city = "Binh Duong";
// console.log(user)
// console.log(copy)

// const user = {
//     name: "Phong",
//     address: {
//         city: "Thu Duc",
//         district: 9
//     }
// };
// function updateCity(user,city){
//     if(user===null || typeof user !=='object' || Array.isArray(user))
// //         throw new Error('Loi')

// //     const copy={
//     ...user,
//     address:{
//         ...user.address,
//         city:city
//     }
// }
// //     copy.address.city=city
//     return copy
// }
// console.log(user)
// console.log(updateCity(user,'Binh Duong'))

const user = {
    name: "Phong",
    age: 20,
    address: {
        city: "Thu Duc"
    },
    skills: ["C++", "JavaScript"]
};
const a = user;
const b = { ...user }; // Tạo object mới nhưng dùng chung object lồng là address và skills
const c = structuredClone(user);
a.name = "A"; // user.name='A' a.name='A'
b.name = "B"; // user và a .name vẫn bằng 'Phong' chỉ Object mà b trỏ tới thay đổi
c.name = "C";

a.address.city = "A";
b.address.city = "B";
c.address.city = "C";

a.skills.push("Java");
b.skills.push("Python");
c.skills.push("Node");

console.log(user);
console.log(a);
console.log(b);
console.log(c);