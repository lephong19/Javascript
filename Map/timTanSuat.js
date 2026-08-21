// Tim Tần Suất xuất hiện các phần tử 
const arr=[1, 2, 2, 3, 1, 4, 2, 3]
function timTanSuat(arr)
{
    const map=new Map() 
    for(let x of arr)
    {
        if(!map.has(x))
        {
         map.set(x,1)
        }else{
            let a=map.get(x)
            a+=1;
            map.set(x,a)
        }
    }
    return map
}
console.log(timTanSuat(arr))
//=============================
// Đếm ký tự trong 1 chuỗi
const s="Hoc Lap Trinh C++"
function demKyTu(s)
{
    const map=new Map() 
    
    for(let i=0; i < s.length; i++)
    {
        if(!map.has(s[i]))
        {
            map.set(s[i],1)
        }else{
            let count=map.get(s[i]) 
            count+=1
            map.set(s[i],count)
        }
    }
    return map
}
console.log("So ky tu:" , demKyTu(s))
//================================
// Tim Phần tử xuất hiên nhiều nhất
function timPtXuatHienMax(arr)
{
    const map=new Map() 
    for(let x of arr)
    {
        if(!map.has(x))
        {
            map.set(x,1)

        }else{
            let a=map.get(x)
            a+=1
            map.set(x,a)
            
        }
    }
    let dem=0
    let cuakey=0
    const mapRes=new Map() 
   const res= map.forEach((value,key)=>{
    if(value>dem)
    {
                dem=value
    cuakey=key
    }
   })
   return mapRes.set(cuakey,dem)
}
console.log(timPtXuatHienMax(arr))