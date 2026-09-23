// Thao Tac với for each
const map=new Map() 
map.set("apple",10)
map.set("banana",20)
map.set("orange",15)

// In key
function inKey(map)
{
    let kq=[]
    const res=map.forEach((value,key) => {
        kq.push(key)
    });
    return kq
}
// In value
function inValue(map)
{
    let kq=[]
    const res=map.forEach((value,key)=>{
        kq.push(value)
    });
    return kq
}
console.log("key:",inKey(map)) 
console.log("value:",inValue(map)) 
// Tính tổng value
function tinhTongValue(map) 
{
    let dem=0;
    const res=map.forEach((value,key)=>{
        dem+=value
    });
    return dem
}
console.log("TONG VALUE:",tinhTongValue(map))