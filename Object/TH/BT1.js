let user = {
    name: "Phong",
    age: 19,
    email: "phong@gmail.com"
};
// In các thuộc tính
// In câu: Phong is 19 years old

// console.log(user.name)
// console.log(user.age)
// console.log(user.email)

console.log(`${user.name} is ${user.age} years old`)

// Add class
user={
    ...user,
    class:"university"
}
user.age=20
delete user.name
console.log(user)

// check has name?
if(! ("name" in user))
{
    console.log("NO")
}else
{
    console.log("YES")
}
// Dem Property
function dem(user)
{
    let dem=0
    for(let x in user){
        dem++
    }
    return dem
}
console.log(dem(user))
function dem2(user){
    return Object.keys(user).length
}
console.log(dem2(user))


const scores = {
    math: 8,
    english: 7,
    programming: 9,
    database: 8.5
};
// Tinh Tong value
function tinhTongVal(scores)
{
    let val=Object.values(scores)
    let dem=0
    for(let i=0; i < val.length;i++) 
    {
        dem+=val[i]
    }
    return dem
}
console.log(tinhTongVal(scores))
// Tim value max
function timMaxVal(scores)
{
    let val=Object.values(scores)
    const res=val.reduce((acc,v)=>{
        return v>acc?v:acc
    },val[0])
    return res
}
console.log(timMaxVal(scores))

const arr = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];
// Dem So lan Xuat hien
function tanSuat(arr){
    let res={} 
    for(let i=0; i <arr.length; i++ )
    {
        if(!res[arr[i]])
        {
            res[arr[i]]=1
        }else{
            res[arr[i]]+=1
        }
    }
    return res
}
console.log(tanSuat(arr))

// Tim PT Xuat hien Nhieu nhat
const a = [
    "js",
    "java",
    "js",
    "python",
    "java",
    "js"
];
function timFreMax(a){
    let max=0
    let name=""
    let res={}
    for(let i=0; i <a.length; i++ )
    {
        if(!res[a[i]])
        {
            res[a[i]]=1
        }else{
            res[a[i]]+=1
        }
    }
    let va=Object.entries(res)
    for(let x of va){
        if(x[1]>max){
            max=x[1]
            name=x[0]
        }
    }
    return name
}

console.log(timFreMax(a))
/*
js:3
java:2
python:1
 */

const b11 = [
    { id: 1, name: "An", age: 20 },
    { id: 2, name: "Bình", age: 22 },
    { id: 3, name: "Cường", age: 19 }
];
// Tim UserByID , Tim UserByName, Loc user >=20
function findUserByID(b11,id)
{
    if(!Array.isArray(b11))
        throw new Error("errorArray")
    if(b11.length===0)
        throw new Error("errorLength")

    if(!id || typeof id !=="number" || id <=0)
        throw new Error("ErrorID")

    const indexUser=b11.findIndex(i=>i.id===id)
    if(indexUser===-1)
    {
        throw new Error("Not found")
    }
    return{
        message:"Tim Thay",
        data:b11[indexUser]
    }
}
console.log(findUserByID(b11,2))

const locUser=b11.filter(i=>i.age>=20)
console.log(locUser)

const b14 = [
    { name: "Laptop", price: 1500 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 },
    { name: "Monitor", price: 300 }
];
// Loc theo Gia tien bang callback
function goiCallback(b14,callback)
{
    let res=[]
    for(let x of b14)
    {
        if(callback(x)) 
        {
            res.push(x)
        }
    }
    return res
}
const myFilter=(i=>i.price>=100)
console.log(goiCallback(b14,myFilter))

const b15 = [
    { name: "Laptop", price: 1500, quantity: 2 },
    { name: "Mouse", price: 20, quantity: 3 },
    { name: "Keyboard", price: 50, quantity: 1 }
];
function tongTienKho(b15)
{
    let sum=0
    for(let x of b15)
    {
        sum += x.price*x.quantity
    }
    return sum
}
console.log(tongTienKho(b15))

const b16 = [
    { name: "An", role: "admin" },
    { name: "Bình", role: "user" },
    { name: "Cường", role: "admin" },
    { name: "Dũng", role: "user" }
];

// Group du lieu bang role
function groupData(b16)
{
    if(!Array.isArray(b16))
        throw new Error("errorData")

   let res={}
   for(let x of b16){
    if(!x || typeof x !== "object")
        throw new Error("errorObject")
    const {name,role}=x
    if(!name || typeof name!=="string")
        throw new Error("errorName")
    if(!role || typeof role !=="string")
        throw new Error("errorRole")

    if(!res[role]){
        res[role]=[]
   }
    res[role].push(name)
   
}
   return res
}
console.log(groupData(b16))

const b19 = [
    { id: 1, name: "An", age: 20 },
    { id: 2, name: "Bình", age: 21 }
];
// Update user tim theo id va sua
function Update(b19,id,newInfo)
{
    if(!Array.isArray(b19))
        throw new Error("errorData")

    if(!Number.isInteger(id)||id<=0)
        throw new Error("errorID")

    if(!newInfo || typeof newInfo!=="object")
        throw new Error("errorObject")

    const user=b19.find(i=>i.id===id)

    if(!user)
    {
        throw new Error("errorUser")
    }
    return{
        message:"UPDATE Thanh Cong",
        data:{
            ...user,
            newInfo
        }
    }
}
console.log(Update(b19,2,{name:"Binh Nguyen",age:23}))