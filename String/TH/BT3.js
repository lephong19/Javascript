// Viết hoa chữ cái đầu mỗi từ

let str='  tRuoNg DaI hoC MO  ' 
// 'Truong Dai Hoc Mo'

function chuanHoaChuoi(str)
{
     if(typeof str !== 'string' || str.trim()==='')
        throw new Error('Loi chuoi str')

    let newStr=str.trim() 
    // 'tRuoNg DaI hoC MO'
    let res=''
    let xuLy=''
    for(let i=0; i < newStr.length ; i++){
        if(!(/\s/.test(newStr[i])))
        {
            xuLy += newStr[i]
            // xuLy='tRuoNg'
        }

        if(/\s/.test(newStr[i]))
        {
            xuLy=xuLy[0].toUpperCase()+xuLy.slice(1,i).toLowerCase()
             res += xuLy
             res += ' '
             xuLy=''
        }
    }
      xuLy=xuLy[0].toUpperCase()+xuLy.slice(1).toLowerCase()
             res += xuLy
             res += ' '
    return res
}
console.log(chuanHoaChuoi(str))