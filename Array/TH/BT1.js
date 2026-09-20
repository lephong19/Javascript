// Muc tiêu : Xóa trùng
const a=[2,14,5,6,2,5,6] // [2,14,5,6]
function xoaTrung(a){
    if(!Array.isArray(a) || a.length===0)
        throw new Error('Loi mang array')

    let res=[]
    res.push(a[0])
    for(let i=1; i < a.length ; i++){
        let keyKiemTra=a[i]
        let posKiemTra=res.length-1
        while(posKiemTra >= 0 && res[posKiemTra]!==keyKiemTra){
            posKiemTra--
        }

        if(posKiemTra===-1){
            res.push(keyKiemTra)
        }
    }
    return res
}
console.log(xoaTrung(a))