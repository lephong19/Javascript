// Chỉ dùng await gọi then nếu đúng và catch khi throw
async function get(number) {
    if(number>0){
        return number
    }
    throw new Error('loi_number')
}

get(-1)
.then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})
