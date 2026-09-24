 const user={
    id:101,
    name:'Nguyen Van A',
    age:20
}
function getUser(user){
    return new Promise((resolve,reject)=>{
        if(user===null || typeof user !== 'object' || Array.isArray(user))
            return reject('loi user')

        if(!Number.isInteger(user.id) || user.id<=0)
            return reject('loi_id')

        if(typeof user.name!=='string' || user.name.trim()==='')
            return reject('loi_nam')

        if(!Number.isInteger(user.age) || user.age<=15)
            return reject('loi_age')

        resolve (user)
    })
}
getUser(user)
    .then((u) => {
        return u.name
    })
    .then((name) => {
        return name.toUpperCase()
    })
    .then((name) => {
        return `USER: ${name}`
    })
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })