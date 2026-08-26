const arr = [1, 2, 2, 3, 3, 3, 4, 4];
// Dung map tim tan suat xuat hien nhieu nhat
function timFrequencyMax(arr)
{
    if(!Array.isArray(arr))
        throw new Error("Loi array")
    

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
    let res=[]
    let max=0
    let dapSo=0
    for(const x of map) 
    {
        if(max<x[1])
           {
             max=x[1]
            dapSo=x[0]
           }

        
    }
    res.push(dapSo) 
    return res
}
console.log(timFrequencyMax(arr))