const user={
    name:'Nguyen Van Tuat',
    age:21
}
function getUser(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return resolve(user)
        },5000)
    })
}
async function main() {
    try{
        const get=await getUser(user)
        get.name=get.name.trim().toUpperCase()
        console.log(get)
    }catch(err){
        console.log(err.message)
    }
}
main()
