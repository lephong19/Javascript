const users = [
    { id: 1, name: "Phong", age: 20, role: "admin", salary: 1500 },
    { id: 2, name: "An", age: 17, role: "user", salary: 900 },
    { id: 3, name: "Nam", age: 25, role: "user", salary: 1200 },
    { id: 4, name: "Lan", age: 22, role: "admin", salary: 1800 },
    { id: 5, name: "Minh", age: 30, role: "user", salary: 2000 }
];
// users.forEach((user)=>{
//     console.log(`${user.name} - ${user.age} - ${user.role}`)
// })


let salary=0
users.forEach((user)=>{
    salary += user.salary
})
//console.log(salary)


let obj={}
users.forEach((user)=>{
    if(!obj[user.role]){
        obj[user.role]=0
    }
    obj[user.role]+=1
})
//console.log(obj)
function locTheoRole(users,role){
    // valite

    let a=[]
    users.forEach((user)=>{
        if(user.role===role){
            a.push(user)
        }
    })
    return a
}
//console.log(locTheoRole(users,'admin'))

const desAge=users.sort((a,b)=>a.age-b.age)
console.log(desAge)