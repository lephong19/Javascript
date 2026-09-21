// Phân loại ký tự trong chuỗi
const str="1. He is a student AT Open University IN HO CHI MINH CITY"

function analyzeStr(str){
    if(typeof str !== 'string' || str.trim()==='')
        throw new Error('Loi chuoi str')

    let letters=0
    let numbers=0
    let special=0
    let spaces =0


    for(let i=0 ; i < str.length; i++){
        let c= str[i]
        if(/[0-9]/.test(c)){
            numbers++
        }else if(/[a-zA-Z]/.test(c)){
            letters++
        }else if(/\s/.test(c)){
            spaces++;
        }else{
            special++
        }
    }
    return{
        letters:letters,
        numbers:numbers,
        spaces:spaces,
        special:special
    }
}

console.log(analyzeStr(str))