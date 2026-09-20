// Di chuyển số 0 về cuối
const a=[2,0,4,0,3,2,0,5]
// OUTPUT: [2,4,3,2,5,0,0,0]

function swap(a,i,j){
    let temp=a[i]
    a[i]=a[j]
    a[j]=temp
}
function move(a){

    if(!Array.isArray(a) || a.length===0)
        throw new Error('error')

    let i=0;
    let j=1
    while(j < a.length){
        if(a[i]!==0 && a[j]===0){
            i++,j++
        }

        if(a[i]===0 && a[j]!==0){
            swap(a,i,j)
            i++,j++
        }

        if(a[i]===0 && a[j]===0){
            j++
        }
    }
    return a
}
console.log(move(a))