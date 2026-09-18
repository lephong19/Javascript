// Dữ liệu đầu vào là chuỗi JSON 
const jsonUsers = `[
    {
        "id": 1,
        "username": "phong",
        "role": "user",
        "status": "offline"
    },
    {
        "id": 2,
        "username": "an",
        "role": "admin",
        "status": "online"
    },
    {
        "id": 3,
        "username": "nam",
        "role": "user",
        "status": "offline"
    }
]`;
/**
 MỤC TIÊU LÀ XÂY CÁC HÀM SAO:
parseUsers() : đọc dữ liệu người dùng ->Array<object>
findUserById(id)
createUser(user)
deleteUser(id)
updateStatus(id, status)
groupUsersByRole(role)
getOnlineUsers()
 */

// Yeu cau 1 
function parseUsers(jsonUsers){
    
   try{
    if(!jsonUsers || typeof jsonUsers !=="string")
        throw new Error("LOI JSON")
    return JSON.parse(jsonUsers)

   }catch(err)
   {
    return{
        message:err.message
    }
   }
}
 
const data=parseUsers(jsonUsers)
// Yeu cau 2
function findUserById(id)
{
    if(!id || typeof id !=="number" || id <=0 ) 
        throw new Error("LOI ID")

    const indexUser=data.findIndex(i=>i.id===id)
    if(indexUser!==-1)
    {
        return{
            message:"TIM THAY",
            Nguoi_Dung:data[indexUser]
        }
    }
    return{
        message:"KHONG TIM THAY"
    }
}
console.log(findUserById(2))

// Yeu Cau 3.1: Tạo NHIỀU user
function createUsers(users) 
{
   try{
     if(!Array.isArray(users))
        throw new Error("LOI USERS")

    const set=new Set() 
    for(let x of users)
    {
        const {id,username,role,status}=x
        if(!id || typeof id !=="number" || id <=0)
            throw new Error("LOI ID")

        if(!username || typeof username!=="string" )
            throw new Error("LOI USERNAME")

        if(!role || typeof role!=="string" || (role!=="admin" && role!=="user"))
            throw new Error("LOI ROLE")

        if(!status || typeof status!=="string" || (status!=="offline" && status!=="online"))
            throw new Error("LOI STATUS")

        const duplicate=data.some(i=>i.id===id)
        if(!set.has(id)&&!duplicate)
        {
            set.add(id)
            data.push({
                id,
                username,
                role,
                status
            })
        }else{
            throw new Error("ID DA TON TAI")
        }
       
    }
     return{
            message:"THEM THANH CONG"
        }
   }catch(err)
   {
    return{
        message:err.message
    }
   }
}
const users=[
    // Du lieu cac user duoc them
    {id:5,username:"Nguyen Van A",role:"admin",status:"online"},
    {id:6,username:"Nguyen Van A",role:"user",status:"offline"}
]

// Yeu Cau 3.2 : Tạo 1 user
function createUser(user)
{
   try{
     if(!user||typeof user !== "object")
        throw new Error("LOI USER")

    if(!user.id || typeof user.id !=="number" || user.id <=0)
            throw new Error("LOI ID")

        if(!user.username || typeof user.username!=="string" )
            throw new Error("LOI USERNAME")

        if(!user.role || typeof user.role!=="string" || (user.role!=="admin" && user.role!=="user"))
            throw new Error("LOI ROLE")

        if(!user.status || typeof user.status!=="string" || (user.status!=="offline" && user.status!=="online"))
            throw new Error("LOI STATUS")

        const duplicate=data.some(i=>i.id===user.id)
        if(duplicate)
            throw new Error("ID DA TON TAI")

        data.push(user)
        return{
            message:"THEM USER THANH CONG"
        }
   }catch(err)
   {
    return{
        message:err.message
    }
   }
}
// Yeu cau 4
function deleteUser(id)
{
    try{
        if(!id || typeof id!=="number" || id<=0) 
        throw new Error("LOI ID")

    const indexUser=data.findIndex(i=>i.id===id)
    if(indexUser===-1)
        throw new Error("KHONG TIM THAY USER")

    data.splice(indexUser,1)
    return{
        message:"XOA THANH CONG"
    }
    }catch(err)
    {
        return{
            message:err.message
        }
    }
}
// Yeu cau 5:
function groupUsersByRole(data)
{
    if(!Array.isArray(data))
        throw new Error("LOI DATA ARRAY")

    let group={} 
    for(let x of data)
    {
        const {id,username,role,status}=x
        if(!group[role])
        {
           group[role]=[] 
        }
        group[role].push({
            id,
            username,
            status
        })
    }
    return group
}
console.log(groupUsersByRole(data))