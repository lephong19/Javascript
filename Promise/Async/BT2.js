const user={
    id:207,
    name:'LeToan P',
    age:19
}

function getUser(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(user.id>0)
            resolve(user)

            reject(new Error('loi'))
        },2000)
    })
}
async function main() {
    try {
        const get = await getUser(user)
        console.log(get)
    } catch (err) {
        console.log(err.message)
    }
}

main()