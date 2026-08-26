// Có thể hiểu là :  Hai số lớn nhất  không trùng nhau
const arr = [5, 6, 2, 8, 1,9,9];
function timHaiSoLonNhat(arr)
{
    // max=10,max=8
    // max=6,max2=5
    // max=8,max2=6
    // max=9, max2=8
    // max=9,max2=9
    if(!Array.isArray(arr)) throw new Error("LOI ARR")

        let res=[] 
        let max=arr[0] 
        let max2=Number.NEGATIVE_INFINITY;
        
        for(let i=0; i < arr.length; i++)
        {
            if(arr[i]>max)
            {
                max2=max
                max=arr[i]
            }else if(max===arr[i]){
                continue
            }else if(arr[i]>max2)
            {
                max2=arr[i]
            }
      
        }
          res.push(max)
        res.push(max2)
        return res
}
console.log(timHaiSoLonNhat(arr))