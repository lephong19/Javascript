const data=["apple", "apple", "orange", "banana", "apple"]

function demTanSuat(data) 
{
    if(!Array.isArray(data)) 
        throw new Error("Loi data khong phai la array")

    let res={}
    for(let x of data)
    {
        if(!x || typeof x !== "string")
            throw new Error("PT khong hop le")

        if(!res[x])
        {
            res[x]=1
            // apple:1
        }else
            res[x]+=1
    }
    return res
}
console.log(demTanSuat(data))


