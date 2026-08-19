// Yêu cầu: Tìm các số xuất hiện >= 2 lần
const numbers=[1, 2, 3, 2, 4, 1, 5, 2]
function countNumber(numbers)
{
    if(!Array.isArray(numbers))
        throw new Error("Error")
    const setCheck=new Set() 
    const setRes=new Set()
    let dem=0;
    for(let x of numbers)
    {
        if(!setCheck.has(x))
        {
            dem=1;
            setCheck.add(x) 
        }else{
            dem++;
            setRes.add(x) 
        }
    }
    return Array.from(setRes)
}
console.log(countNumber(numbers))