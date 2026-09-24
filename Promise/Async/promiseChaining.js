const user={
    id:207,
    name:'Nguyen Van A',
    password:'1233556',
    age:19,
    active:true
}
function login(pass){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof pass!=='string' || pass.trim()==='')
                return reject(new Error('loi_pass'))

            if(pass!==user.password)
                return reject(new Error('Fail Login'))

            return resolve(user.id)
        },2000)
    })
}
function getUser(id){
    return new Promise((resolve,reject)=>{
        if(!Number.isInteger(id) || id <=0 )
            return reject(new Error('loi_id'))

        if(id!==user.id)
            return reject(new Error('Inconnective'))
        return resolve({
          id:user.id,
          name:user.name  
        })
    })
}
function getProfile(id){
    return new Promise((resolve,reject)=>{
         if(!Number.isInteger(id) || id <=0 )
            return reject(new Error('loi_id'))

          if(id!==user.id)
            return reject(new Error('Inconnective'))
        return resolve({
          ...user
        })
    })
}
console.log('loading')
async function main() {
    try{
        const dangNhap= await login('1233556')
    const showProfile=await getProfile(dangNhap)
    
    console.log(showProfile)
    }catch(err){
        console.log(err.message)
    }
}
main()