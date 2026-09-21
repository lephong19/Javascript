// // Dùng forEach in từng chữ
// const numbers = [10, 20, 30, 40];
// numbers.forEach((value,index)=>{
//     console.log(`index: ${index} , value:${value}`)
// })


// let num=0
// numbers.forEach((value)=>{
//     num += value
// })
// // console.log(num)

// let soChan=0
// let soLe=0
// let soLonHon10=0
// numbers.forEach((value)=>{
//     if(value%2===0){
//         soChan++
//     }
//      if(value%2!==0){
//         soLe++
//     }
//      if(value>10){
//         soLonHon10++
//     }
// })
// // console.log(soLe)

// const users = [
//     { id: 1, name: "Phong", age: 20 },
//     { id: 2, name: "An", age: 17 },
//     { id: 3, name: "Nam", age: 22 }
// ];

// // Dùng forEach() in : Phong-20 , An-17 , Nam-22
// users.forEach((user)=>{
//     console.log(`${user.name} - ${user.age}`)
// })
// const a=[]
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((value)=>{
//     a.push(value *=2)
// })
// console.log(a)
// const a=[]
// const users = [
//     { id: 1, name: "Phong", age: 20 },
//     { id: 2, name: "An", age: 17 },
//     { id: 3, name: "Nam", age: 22 },
//     { id: 4, name: "Minh", age: 15 }
// ];
// users.forEach((user)=>{
//     if(user.age>=18)
//         a.push(user)
// })
// console.log(a)
const users = [
    { name: "Phong", role: "admin",age:19 },
    { name: "An", role: "user",age:17 },
    { name: "Nam", role: "user" ,age:20},
    { name: "Minh", role: "admin" ,age:21}
];
let a={}
users.forEach((user)=>{
    const {name,role}=user
    if(!a[role]){
        a[role]=[]
    }
    a[role].push(name)
})
console.log(a)
users.sort((a,b)=>a.age-b.age)
console.log(users)