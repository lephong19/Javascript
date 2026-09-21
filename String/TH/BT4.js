// Tìm từ xuất hiện nhiều nhất ,nếu có 2 từ trở lên
// Lấy từ xuất hiện đầu tiên
const str='node js is great and node js is powerful'

function timTuXuatHienNhieuI(str){
     if(typeof str !== 'string' || str.trim()==='')
        throw new Error('Loi chuoi str')

    const newStr=str.trim().split(' ')
    let obj={}
    for(let x of newStr){
       if(!obj[x]){
        obj[x]=0
       }
       obj[x]+=1
    }
    const convert=Object.entries(obj)

    let maxCount=0
    let nameMax=''
    for(let x of convert){
        if(x[1]>maxCount){
            nameMax=x[0]
            maxCount=x[1]
        }
        
    }
    return {
            name:nameMax,
            count:maxCount
        }
}
console.log(timTuXuatHienNhieuI(str))