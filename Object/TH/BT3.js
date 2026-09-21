/**
-obj phải là object
-key phải là string
-thêm hoặc cập nhật property bằng key
-trả về object
 */
function setProperty(obj,key,value){
    if(!obj || typeof obj !=='object' || Array.isArray(obj))
        throw new Error('Loi dinh dang nguoi dung')

    if( typeof key !=='string' || key.trim()==='')
        throw new Error('Loi key')
  


   return {
    ...obj,
    [key]:value
   }
}
const user={
    name:'Phonmg',
    age:18, 
}
//console.log(setProperty(user,'role','student'))
// for (const [key, value] of Object.entries(user)) {
//     console.log(key, value);
// }
function sizeProperty(obj){
    return Object.keys(obj).length
}
//console.log(sizeProperty(user))