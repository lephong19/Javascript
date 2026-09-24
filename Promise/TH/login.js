const user={
    name:'Nguyen Bao T',
    password:'123345'
}
function login(name,pass){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof name!=='string' || name.trim()==='')
                return reject('loi_name')

            if(typeof pass!=='string' || pass.trim()==='')
                return reject('loi_pass')

            if(name.toLowerCase()===user.name.toLowerCase() && pass===user.password){
                return resolve('Success LOGIN')
            }
            return reject('Fail LOGIN')
        },3000)
    })
}
console.log('loding...')
login('Nguyen  T','123345')
.then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})
.finally(()=>{
    console.log('Finish')
})