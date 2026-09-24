const user={name:'Th Y'}
const product={name:'Apple'}
const order={name:'Laptop'}

function getUser(user){
    return new Promise((resolve)=>{
        setTimeout(()=>{
             resolve(user)
        },3000)
    })
}

function getProduct(product){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (product)
        },3000)
    })
}


function getOders(order){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(order)
        },1000)
    })
}
Promise.race([
     getOders(order),
    getUser(user),
    getProduct(product),
   
])
.then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})