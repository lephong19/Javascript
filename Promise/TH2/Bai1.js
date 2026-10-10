// function layThongTin(name){
    
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             reject(`Lay thong tin ${name} that bai`)
//         },3000)
//     })
    
// }

// const data=layThongTin('Phong');
// data.catch((dulieu)=>{
//     console.log(dulieu)
// })


// function xuLyChain(number){
//     return new Promise((resolve)=>{
//         resolve(number)
//     })
// }

// const res=xuLyChain(5);
// res.then((data)=>{
//     return data * 2 ;
// })
// .then((data)=>{
//     return data+10;
// })
// .then((data)=>{
//     console.log(data)
// })


function kiemTraNumber(number){
    if(number>0){
        console.log("OK Buoc 1");
    }
    if(typeof number!=="number")
    {
        throw new Error('is_number')
    }
}
async function main() {
    try{
        const check=await kiemTraNumber(21)
        console.log(check);
    }catch(err){
        console.log(err.message)
    }
}
main()