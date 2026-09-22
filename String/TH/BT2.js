// Đảo ngược từng từ
// C1
const str="hello world javascript"
function output(str){
     if(typeof str !== 'string' || str.trim()==='')
        throw new Error('Loi chuoi str')

    const convert= str.trim().split(/\s+/)
    let res=""
    for(let x of convert){
        
        for(let i=x.length-1; i>=0; i--)
        {
            res+=x[i]
        }
        res += " "
    }
    return res.trim()
}
console.log(output(str))

// C2: Dùng join