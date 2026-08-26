const data=[3,4,2,3,5,5,4]


// Dùng set: ưu tiên
function xoaTrungBySet(data) 
{
    if(!Array.isArray(data))
        throw new Error("Loi data")
    const set= new Set(data)
    return Array.from(set)
}

// Khong dung set: Luyện tư duy
function xoaTrung(data) 
{
    if(!Array.isArray(data))
        throw new Error("Loi data")
    if(data.length===0)
        throw new Error("Array rong")

    let res=[]
   res.push(data[0])
   for(let i=1; i<data.length;i++) 
   {
    //pos=3
    let pos=i-1
    while(pos>=0 && data[i]!==res[pos])
    {
        pos--
    }
    if(data[i]===res[pos])
    {
        continue
    }else if(pos===-1)
    {
        res.push(data[i])
    }
   }
   return res
}
console.log(xoaTrung(data))

// Map: trung bình
function xoaTrungByMap(data) 
{
    if(!Array.isArray(data))
        throw new Error("Loi data")
    if(data.length===0)
        throw new Error("Array rong")

    const map=new Map() 
    let res=[]
    res.push(data[0]) 
    map.set(data[0],1)
    for(let i=1; i <data.length;i++) 
    {
        if(!map.has(data[i]))
        {
             res.push(data[i])
            map.set(data[i],1)           
        }else{
            continue
        }
    }
    return res
}
console.log(xoaTrungByMap(data))
