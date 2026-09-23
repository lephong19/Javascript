const users = [
    { id: 101, name: "Phong", age: 20, role: "admin" },
    { id: 102, name: "An", age: 18, role: "user" },
    { id: 103, name: "Nam", age: 22, role: "user" }
];

function LayIdLamKey(users){
    if(!Array.isArray(users)||users.length===0)
        throw new Error('loi_users')


    let map=new Map()

    for(let user of users){
        if(user===null || typeof user!=='object' || Array.isArray(user))
            throw new Error('Loi_user')

        const {id,name,age,role}=user
        // valite

        map.set(id,user)
    }
    return map
}
const newData=LayIdLamKey(users)
function findUserById(id){
    // valite
    if(newData.has(id)){
        return newData.get(id)
    }
    return {
        value:null
    }
}

const words = [
    "node",
    "js",
    "node",
    "backend",
    "js",
    "node"
];
function demTanSuat(words){
    // valite
    let map=new Map()

    for(let word of words){
        // valite
        if(!map.has(word)){
            map.set(word,1)
        }else{
            let val=map.get(word)
            val += 1
            map.set(word,val)
        }
    }
    return map
}
//console.log(demTanSuat(words))
const orders = [
    { id: 1, userId: 101, total: 200 },
    { id: 2, userId: 102, total: 300 },
    { id: 3, userId: 101, total: 150 },
    { id: 4, userId: 103, total: 500 },
    { id: 5, userId: 102, total: 100 }
];

function backendOrder(orders){
    // valite
    const map=new Map()
    for(let order of orders){
        // valite
        const{id,userId,total}=order
        if(!map.has(order.userId)){
            map.set(userId,total)
        }else{
            let val=map.get(userId)
            val+=total
            map.set(userId,val)
        }
    }
    return map
}
// console.log(backendOrder(orders))

const lastOrders=[
      {
        id: 1,
        userId: 101,
        productId: 10
    },
    {
        id: 2,
        userId: 101,
        productId: 20
    },
    {
        id: 3,
        userId: 101,
        productId: 10
    },
    {
        id: 4,
        userId: 102,
        productId: 30
    }
];
//101 → {10, 20}
//102 → {30}
function setProduct(lastOrders){
   // valite
   const map=new Map()
   for(let x of lastOrders){
    // valite
    const {id,userId,productId}=x
    let listProductId=map.get(userId)
    if(!listProductId){
        listProductId=new Set()
    }
       listProductId.add(productId)
       map.set(userId,listProductId)
   }

   return map
}
console.log(setProduct(lastOrders))