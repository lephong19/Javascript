function ham1(number){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(number);
        },4000)
    })
}
function ham2(number){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(number)
        },3000)
    })
}
function ham3(number){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(number);
        },3000)
    })
}

Promise.any([
ham1(10),
ham2(20),
ham3(30),
])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
     console.log(err)
})