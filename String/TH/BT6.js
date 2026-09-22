// Find and replace nhưng có điều kiện

const text="node is easy. node is powerful."
function replaceWord(text , oldWord, newWord){
    if(typeof text !== 'string' || text.trim()==='')
        throw new Error('loi text')

    if(typeof oldWord !== 'string' || oldWord.trim()==='')
        throw new Error('loi oldword')


    if(typeof newWord !== 'string' || newWord.trim()==='')
        throw new Error('loi newword')

    const newText=text.trim().split(/\s+/)
    let res=''
    for(let x of newText){
        if(x.toLowerCase()===oldWord.toLowerCase())
        {
            res += newWord
            res += ' '
        }else{
            res += x
            res += ' '
        }
    }
    return res.trim()
}
console.log(replaceWord(text,'node','Node.js'))


