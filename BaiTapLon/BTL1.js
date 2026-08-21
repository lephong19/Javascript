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
getUsersByRole(role)
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
