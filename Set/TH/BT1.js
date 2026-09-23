// Mục tiêu: Trả về dãy số không bị trùng
const ids=[1,2,3,2,4,1,5]

const set= new Set(ids)
//console.log(set)
//console.log([...set])


//=======================
// Kiểm tra có trùng email không
const users = [
    { id: 1, email: "phong@gmail.com" },
    { id: 2, email: "tuna@gmail.com" },
    { id: 3, email: "a@gmail.com" }
];
function kiemTraTrungEmail(users){
    if(!Array.isArray(users) || users.length===0)
        throw new Error('loi users')

    const set=new Set()
    let trung=false
    let a=[]
    for(let x of users){

        const {id , email}=x

        if(x===null || typeof x !=='object' || Array.isArray(x))
            throw new Error('loi x ')
        if(!Number.isInteger(id) || id <= 0 )
            throw new Error('Loi id')
        if(typeof email!=='string' || email.trim()==='')
            throw new Error('loi email')


        if(!set.has(email)){
            set.add(email)
        }else{
            trung=true
            a.push(id)
        }
    }
    if(trung){
        return{
            message:'Co email trung',
            id_user_trung_email:a
        }
    }
    return{
        message:'Data clean'
    }
}
//console.log(kiemTraTrungEmail(users))

//====================================
// Quyền truy cập
const allowedRoles = new Set(["ADMIN", "Manager"]);

const normalizedRoles = new Set(
    [...allowedRoles].map(role => role.toLowerCase())
);

function canAccess(role){
    if(typeof role !== 'string' || role.trim()==='')
        throw new Error('loi role truyen vao')
    

    role=role.trim().toLowerCase()
        if(normalizedRoles.has(role)){
            return {
                message:'Co the truy cap'
            }
        }
    
    return{
        message:'Khong the truy cap'
    }
}
// console.log(canAccess('AdMiN'))

//================================
// Mô phỏng like bài viết
const likeUsers=new Set()
const setLuuIDUsers=new Set(
    users.map(x=>x.id)
)

function like(userID){
    if(!Number.isInteger(userID) ||userID <0 ){
        throw new Error('loi userID')
    }
    const find=users.findIndex(i=>i.id===userID)
    if(find===-1)
        throw new Error('userID khong ton tai')

   
    if(!likeUsers.has(userID)){
        likeUsers.add(userID)
         return{
        message:'Da like',
        nguoi_dung:users[find]
    }
    }else{
        throw new Error('user da like');
    }
}
function unlike(userID){
     if(!Number.isInteger(userID) ||userID <0 ){
        throw new Error('loi userID')
    }

    if(!likeUsers.has(userID))
        throw new Error('Nguoi dung chua like')
    else
    {
        likeUsers.delete(userID)
        return{
            message:'Nguoi dung xoa like'
        }
    }
}
console.log(like(1))
console.log(like(1))
console.log(unlike(1))