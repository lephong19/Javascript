const data=[1, 0, 2, 0, 3, 0, 4]

// Đưa số 0 về cuối: [1,2,3,4,0,0,0]
function move(data)
{
    if(!Array.isArray(data))
        throw new Error("Loi data")
    if(data.length===0)
        throw new Error("Empty")
    
    let i=0
    let j=1
    while(i<data.length && j<data.length-1)
    {
        if(data[i]*data[j]===0&&data[i]!==0)
        {
            i++
            j++
            continue
        }
        if(data[i]*data[j]===0&&data[j]!==0)
        {
            let temp=data[i]
            data[i]=data[j]
            data[j]=temp
            j++
        }
    }
    return data
}
function move2(data)
{
     if(!Array.isArray(data))
        throw new Error("Loi data")
    if(data.length===0)
        throw new Error("Empty")
    
    let i=0
    let j=0
    let res=[]
    while(i<data.length)
    {
        if(data[i]!==0)
        {
            res.push(data[i])
                    j++
        }
        i++
    }
    while(j<data.length)
    {
        res.push(0) 
        j++
    }
    return res
}
console.log(move(data))