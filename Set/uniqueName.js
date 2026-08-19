
const user =["an", "binh", "an", "cuong", "binh", "dung"]
// Yêu cầu: Bỏ name bị trùng
function getUniqueUsernames(user)
{
    const set=new Set(user)

    return Array.from(set)
}
//console.log(getUniqueUsernames(user))
const newUser=getUniqueUsernames(user)

// Yêu cầu: Trả true nếu danh sách tên bị trùng và ngược lại
function hasDuplicateUsername(user)
{
    if(!Array.isArray(user))
        throw new Error("user not is array")

    const newSet= new Set() 
    for(let x of user)
    {
        // Chưa gặp thì thêm vào newSet
        if(!newSet.has(x))
        {
            newSet.add(x)
        }else{
            // Gặp rồi chứng tỏ bị trùng
            return true
        }
    }
    return false
}
console.log(hasDuplicateUsername(user))