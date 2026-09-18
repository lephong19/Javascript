function runTask(task){
    if(typeof task !== "function")
        throw new Error("Loi function")
    task()
}
runTask(()=>{
    console.log("Hoc Javascript")
})

//==========================
function processNumber(number,callback){
    if(typeof number !=="number")
        throw new Error("Loi number")
    return callback(number)
}
const processNumber1=(x=>x*2)
console.log(processNumber(10,processNumber1))
//=========================
function processName(name,callback){
    return callback(name)
}
const processName1=x=>x.toUpperCase()
console.log(processName("NgUyen vAn A",processName1))
//=========================
const numbers = [2, 5, 8, 11, 14, 17];
function processArray(numbers,callback){
    if(!Array.isArray(numbers)||numbers.length===0)
        throw new Array("Loi array")

    let a=[]
    for(let i=0; i < numbers.length ; i++){
        if(typeof numbers[i] !== "number")
            continue 

        a.push(callback(numbers[i]))
    }
    return a;
}
const processArray1=(x=>x*2)
console.log(processArray(numbers,processArray1))
//=========================
function filterArray(numbers,callback){
    if(!Array.isArray(numbers)||numbers.length===0){
        throw new Error("Error")
    }
    let a=[]
    for(let i=0; i < numbers.length;i++){
        if(callback(numbers[i])){
            a.push(numbers[i])
        }
    }
    return a
}
const filterArray1=x=>x%2===0
console.log(filterArray(numbers,filterArray1))
//=========================
const users = [
    { name: "Phong", age: 20 },
    { name: "An", age: 17 },
    { name: "Nam", age: 22 },
    { name: "Lan", age: 19 }
];
function processUsers(users,callback){
    if(!Array.isArray(users)||users.length===0){
        throw new Error("Loi users")
    }
    let a=[]
    for(let x of users){
        const {name,age}=x
        if(!name||typeof name !== "string")
            throw new Error("Loi name")

        if(!age || typeof age!=="number")
            throw new Error("Loi age")

        if(callback(age))
            a.push(x)
    }
    return a
}
const loc=x=>x>=18
console.log(processUsers(users,loc))
//=========================
function Bai7(users,callback){
     if(!Array.isArray(users)||users.length===0){
        throw new Error("Loi users")
    }
    let a=[]
    let index=0
    for(let x of users){
        if(callback(x)){
            a.push(index,x.name)
        }
        index++;
    }
    return a
}
const locDuLieu=(users)=>{
    return typeof users.age==="number" 
}
console.log(Bai7(users,locDuLieu))
//=========================
const listUsers = [
    { name: "Phong",stt:0, age: 20 },
    { name: "An", stt:1,age: 17 },
    { name: "Nam", stt:2,age: 22 }
];
function transfrom(listUsers,callback){
    if(listUsers.length===0||!Array.isArray(listUsers))
        throw new Error("Error")

    let a=[]
    for(let x of listUsers){
        a.push( callback(x))
    }
  return a
}
const bienDoi=(x)=>({
    ...x,
    stt:x.stt+1
})
console.log(transfrom(listUsers,bienDoi))
//=========================