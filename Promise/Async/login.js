const user={
    name:'Nguyen Van A',
    password:'123345'
}
function login(name,pass){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof name!=='string' || name.trim()==='')
                return reject(new Error('loi_name'))

            if(typeof pass!=='string' || pass.trim()==='')
                return reject(new Error('loi_pass'))

            if(name.trim().toLowerCase()!==user.name.trim().toLowerCase()
              || pass!==user.password)
            return reject(new Error('Fail Login'))

            return resolve('Success Login')
        },2000)
    })
}
async function main() {
    try{
        const dangNhap=await login('Nguyen Van A','123345')
        console.log(dangNhap)

    }catch(err){
        console.log(err.message)
    }
}
main()