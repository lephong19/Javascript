/*
Duyệt bằng for...of.
Duyệt bằng forEach().
Lấy toàn bộ key.
Lấy toàn bộ value.
Lấy toàn bộ [key, value].
 */
const map=new Map() 
map.set(1,"Nguyen Van A")
map.set(2,"Nguyen Thanh P")
map.set(3,"Le Thi B")
map.set(4,"Nguyen Van B")
// Yeu cau 1 
// Cach 1 
function call(map) 
{
    let res=[]
    for(let [keys,values] of map)
    {
        res.push(values)
    }
    return res
}
console.log(call(map))
// Cach 2 
function call2(map)
{
    let res=[] 
    for(let x of map)
        res.push(x[1])
    
    return res
}
console.log(call2(map))

//========================================
// YEU CAU 2 
function call3(map)
{
    let kq =[] 
    const res=map.forEach((value,key) => {
        kq.push(value)
    });
    return kq
}
console.log(call3(map))