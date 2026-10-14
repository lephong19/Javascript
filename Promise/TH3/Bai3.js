function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!Number.isInteger(id)||id<=0)
                return reject(new Error('loi_id'));

            if(id===1){
                resolve({
                    id:1,
                    name:"Phong"
                })
            }else
                return reject(new Error("USER_NOT_FOUND"));
        },2000)
    })
}
const timKiem=getUser(1);
timKiem.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})

async function  main() {
    try{
        const tim=await getUser(2);
        console.log(tim)
    }catch(err){
        console.log(err)
    }
}
main()