const A = [1, 2, 2, 3]
const B = [1, 2, 3, 3,4]

// Yeu cau: Tra ve phan tu cung frequency / khac frequency
function cungFre(A,B)
{
    let mangKetQua=[] 
    
    // Them A vao map
    const map=new Map() 
    for(let x of A)
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
    const map2=new Map()
    for(let x of B)
    {
         if(!map2.has(x))
        {
            map2.set(x,1)
        }else{
            let a=map2.get(x)
            a+=1 
            map2.set(x,a)
        }
    }
    for(let [key,value] of map) {
        if(value===map2.get(key))
        {
            mangKetQua.push(key)
        }
    }
    return mangKetQua
}
console.log(cungFre(A,B)) // 1