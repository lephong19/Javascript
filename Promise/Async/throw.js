const user={
    name:'Nguyen Van A',
    age:14
}
async function validation(user){
    
    if(user===null || typeof user !=='object' || Array.isArray(user))
        throw new Error('loi user')

    if (typeof user.name !== 'string' || user.name.trim() === '')
        throw new Error('loi_name')

    if (!Number.isInteger(user.age) || user.age <= 15)
        throw new Error('loi_age')

    return user
}
try{
    const test= await validation(user)
    console.log(test)
}catch(err){
    console.log(err.message)
}
