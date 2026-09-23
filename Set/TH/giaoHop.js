// Yêu cầu : Tìm hợp của A,B
const A=[1,2,3,4]
const B=[3,4,5,6]

function union(A,B)
{
    const set=new Set(A) 
    for(let x of B) 
    {
        if(!set.has(x))
        {
            set.add(x)
        }
    }
    return Array.from(set)
}
console.log(union(A,B))

// Yêu cầu: Tìm giao của A,B
function intersection(A,B)
{
    const setA=new Set(A)
    const setRes=new Set() 

    for(let x of B) 
    {
        if(setA.has(x))
        {
            setRes.add(x) 
        }
    }
    return Array.from(setRes)
}
console.log(intersection(A,B))


// BT PHU: TIM CAC PT CO TRONG A NHUNG KHONG CO TRONG B
function BTPhu(A,B)
{
    const setRes=new Set()
    const setB=new Set(B)
    for(let x of A)
    {
        if(!setB.has(x) ) 
        {
            setRes.add(x)
        }
    }
    return Array.from(setRes)
}
console.log(BTPhu(A,B))