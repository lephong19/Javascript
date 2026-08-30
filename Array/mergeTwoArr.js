// Biết 2 mảng này đã được sắp xếp
const a = [1, 3, 5, 7];
const b = [2, 3, 6, 8];

function merge(a,b) 
{
    if(!Array.isArray(a) && !Array.isArray(b))
        throw new Error("Loi a & b")
    let res=[] 
    // Tạo con trỏ di chuyển trên a 
    let ai=0
    let aj=a.length-1
    // Tạo con trỏ di chuyển trên b
    let bi=0
    let bj=b.length-1// Có thể không cần
    while ((ai<=aj)&&(bi<=bj)) // có thể viết ai<a.length và bi<b.length
    {
        if(a[ai]<b[bi]) 
        {
            res.push(a[ai]) 
            ai++
        }else if(a[ai]>b[bi]){
            res.push(b[bi])
            bi++
        }else if(a[ai]===b[bi]){
             res.push(a[ai])
            ai++
            bi++
        }
    }
    while(ai<=aj)
    {
        res.push(a[ai])
        ai++
    }
    while(bi<=bj)
    {
        res.push(b[bi])
        bi++
    }
    return res
}
console.log(merge(a,b))