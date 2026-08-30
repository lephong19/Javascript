const arr = [8,8,9];
const target = 16;
// in [2,15] [11 , 6]
function timTarget(arr,target)
{
    if(!Array.isArray(arr))
        throw new Error("Loi Array")

    if(arr.length===0)
        throw new Error("Empty")

    if(Number.isNaN(target) || typeof target!=="number")
        throw new Error("Loi target")

   const map=new Map()
   const res=new Map()
   for(let x of arr)
     {
        if(!map.has(x))
        {
        map.set(x,1)
        }
    else{
        let a=map.get(x)
        a+=1
        map.set(x,a)
    }

    let key=target-x
    if(map.has(key))
    {
        if(res.has(key)||res.has(x)){
            continue
        }
        res.set(x,key)
    }
     }
     return Array.from(res)
}
console.log(timTarget(arr,target))