/*
const user={
    id:101,
    name:'Nguyen Van A',
    age:20
}

const func= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(user!==null){
            resolve(user)
        }
    },2000)
})
func.then((data)=>{
    console.log(data)
}) 
*/

/*
const user={
    username:'Nguyen Van A',
    password:'123345'
}
function login(name,pass) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof name !=='string' || name.trim()==='')
                reject('loi_name')
            if(typeof pass !=='string' || pass.trim()==='')
                reject('loi_pass')
            if(name.toLowerCase()===user.username.toLowerCase() && pass===user.password){
                resolve('Success Login')
            }
            reject('Fail Login')
        },3000)
    })
}
console.log('loading...')
    login('Nguyen Van A','23345')
.then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})
.finally(()=>{
    console.log('loading Success')
}) 
    */
  