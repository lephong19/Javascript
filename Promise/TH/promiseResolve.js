const user={
    name:'Nguyen A',
    age:19
}

Promise.resolve(user)
.then((data)=>{
    return data.name
})
.then((data)=>{
    return data.toUpperCase()
})
.then((res)=>{
    console.log(res)
})