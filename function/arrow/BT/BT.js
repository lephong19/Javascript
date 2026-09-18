
function add(a, b) {
    return a + b;
}

const add1=((a,b)=>a+b)
console.log(add1(3,4))

//===================
function isEven(number) {
    return number % 2 === 0;
}
const isEven1=(x=>x%2===0)
console.log(isEven1(4))

//===================
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

const getFullName1=((a,b)=>a+" " + b)
console.log(getFullName1("Nguyen", "Van A"))

//===================
const getGrade=(x)=>{
    if(x>=8){
        return "Gioi"
    }else if(x >= 6.5){
        return "Kha"
    }else if(x >= 5){
        return "Trung Binh"
    }else{
        return Yeu
    }
}
console.log(getGrade(7))

//===================
const user = {
    name: "Phong",
    age: 20,
    role: "admin"
};
const getUserName=(user=>user.name)
//console.log(getUserName(user))

const getUserInfo=(user)=>{
    delete user.age
    user={
        ...user
    }
    return user
}
console.log(getUserInfo(user))
//===================
const sum=(...number)=>{
    let sum=0
    let i=0
    while(i<number.length){
        sum += number[i]
        i++
    }
    return sum 
}
console.log(sum(1,2,3,4))
//===================
const createUser=(username,age,...roles)=>{
    return {
        name:username,
        age,
        role:roles
    }
}
console.log(createUser("NVA",20,"admin","editor"))
//===================
const findMax=(numbers)=>{
    if(!Array.isArray(numbers))
        throw new Error("Loi array")
    let maxVal=numbers[0]
    let i=1
    while(i < numbers.length){
        if(numbers[i]>maxVal){
            maxVal=numbers[i]
        }
        i++
    }
    return maxVal
}
//===================
const list = [
    { name: "Phong", age: 20, role: "admin" },
    { name: "An", age: 17, role: "user" },
    { name: "Nam", age: 22, role: "admin" },
    { name: "Lan", age: 19, role: "manager" }
];
const findAdults=(list)=>{
    if(!Array.isArray(list)||list.length===0){
        throw new Error("Loi list")
    }
    let a=[]
    for(let i=0; i < list.length; i++){
        if(list[i].age>=18){
            a.push(list[i])
        }
    }
    return a
}
console.log(findAdults(list))
//===================

const Bai10 = [
    { name: "Phong", age: 20, role: "admin" },
    { name: "An", age: 17, role: "user" },
    { name: "Nam", age: 22, role: "admin" },
    { name: "Lan", age: 19, role: "manager" },
    { name: "Minh", age: 16, role: "user" }
];
const analyzeUsers=(Bai10,...roles)=>{
    if(!Array.isArray(Bai10)|| Bai10.length===0)
        throw new Error("Loi Danh Sach")
    if(roles.length===0){
        throw new Error("Loi roles")
    }
    let obj={
        count:0,
        users:[]
    }
    for(let i=0; i < Bai10.length; i++){
        if(Bai10[i].age>=18 && roles.includes(Bai10[i].role)){
            obj.count+=1
            obj.users.push(Bai10[i])
        }
    }
    return obj
}
console.log(analyzeUsers(Bai10,"admin","manager"))