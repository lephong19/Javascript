// CRUD 
/*
Thiết kế các hàm sau:
- createUser()
- findUserById ()
- updateUser()
- deleteUser()
*/
const users = [
    { id: 1, name: "Phong", age: 20, role: "admin" },
    { id: 2, name: "An", age: 17, role: "user" },
    { id: 3, name: "Nam", age: 22, role: "user" }
];
let idUser=users.length
function valite(user){
    if(user===null || typeof user !== "object" || Array.isArray(user))
       throw new Error('Loi user')
    
    if("id" in user)
        throw new Error("Nguoi dung dung ID do QTV cap")

    if(!user.name || typeof user.name!== "string")
        throw new Error('Loi name')

    if(!Number.isInteger(user.age) || user.age <= 15 || user.age>100)
        throw new Error('Loi age')

    if(!user.role || typeof user.role!=="string"|| (user.role!=="admin"&&user.role!=="user"))
        throw new Error('Loi role')
}
function createUser(listAdd){
    if(!Array.isArray(listAdd))
        throw new Error('Loi users')
    
    for(let x of listAdd){
        valite(x)
        let obj={
            id:++idUser,
            ...x,
        }
        users.push(obj)
    }
    return {
        message: "Them Thanh Cong",
        danh_Sach:users
    }
}

const add=createUser([
    {name:"Nguyen Van A",age:18,role:"user"},
    {name:"Tran Van A",age:25,role:"admin"},
    {name:"Nguyen",age:17,role:"user"},
])
console.log(add)
function findUserById(id){
    if(users.length===0)
        throw new Error('Loi ds rong')
    if(!Number.isInteger(id) || !id || id<=0 )
        throw new Error('Khong Tim Thay')
   for(let i=0; i < users.length ; i++){
    if(users[i].id===id){
        return {
            du_lieu_tim_thay:users[i]
        }
    }
   }
   throw new Error('Khong ton tai user')
}
//console.log(findUserById(2))
function updateUser(id , newInfo){
    if(!Number.isInteger(id) || !id || id<=0 )
        throw new Error('Khong Tim Thay')

    valite(newInfo)
    for(let i=0; i < users.length; i++){
        if(users[i].id===id)
        {
             users[i]={
                id:users[i].id,
                    ...newInfo
                }
                return {
                sau_khi_cap_nhat:users[i]
            }
        }
        } 
            throw new Error('Khong Tim Thay')
    }

//console.log(updateUser(2,({name:"Anh",age:18,role:"user"})))

function deleteUser(id){
    if (users.length===0)
        throw new Error('Ds rong')

    if(!Number.isInteger(id) || !id || id<=0 )
        throw new Error('Khong Tim Thay')

    for(let i=0; i < users.length ; i++){
        if(users[i].id===id)
        {
            const user=users[i]
            users.splice(i,1)
            return {
                message: 'Xoa Thanh Cong',
                du_lieu_bi_xoa:user
            }
        }
    }
    throw new Error('Khong tim thay thong tin')
}
//console.log(deleteUser(6))
function searchUsers(users,options){
   // options search theo dieu kien
}
//const a={name:"A",role:"user"}
//console.log(searchUsers(users,{name:'Nam',role:'user'}))
const users2 = [
    { id: 1, name: "Phong", age: 20, role: "admin", password: "123456" },
    { id: 2, name: "An", age: 18, role: "user", password: "abcdef" }
];
function getPublicUsers(users2){
    if(!Array.isArray(users2) || users2.length===0)
        throw new Error ('Loi users 2 ')
    let a=[]
    for(let i=0; i < users2.length; i++){
        let obj={
            id:users2[i].id,
            name:users2[i].name,
            age:users2[i].age,
            role:users2[i].role,
        }
        a.push(obj)
    }
    return a
}
//console.log(getPublicUsers(users2))
function groupByRole(users){
    if(!Array.isArray(users) || users.length===0)
        throw new Error('Error')

    let group={}
    for(let i=0; i < users.length; i++){
        let user=users[i]

        valite(user)

        const {id,name,age,role}=user
        if(!group[role]){
            group[role]=[]
        }
        group[role].push({
            id,name,age
        })
    }
    return group
}
//console.log(groupByRole(users))
const users3={
    id: 1,
    name: "Phong",
    address: {
        city: "HCM",
        district: "Thu Duc"
    }
}

function transform(users3){
    if(!users3 || typeof users3 !== 'object' || Array.isArray(users3))
        throw new Error('Loi')

    let newObj={
        id:users3.id,
        name:users3.name,
        city:users3.address.city,
        address:users3.address.district,
    }
    return newObj
}
console.log(transform(users3))