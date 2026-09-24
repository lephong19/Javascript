const user={
    name:'Ng Bao T',
    age:19,
    active:true
}
function getUser(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(user===null || typeof user!=='object' || Array.isArray(user))
                return reject('loi_user')

            if(typeof user.name!=='string' || user.name.trim()==='')
                return reject('loi_name')
            
            if(!Number.isInteger(user.age) || user.age <=15)
                return reject('loi_age')

            if(typeof user.active !=='boolean')
                return reject('loi_active')

            resolve(user)

        },2000)
    })
}
getUser(user)
.then((user)=>{
    return user.name
})
.then((res)=>{
    console.log(`user: ${res}`)
})
.catch((err)=>{
    console.log(err)
})