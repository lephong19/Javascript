const user=[
    {id: 1, name: "Phong"},
    {id: 2, name: "An"},
    {id: 3, name: "Nam"}
]
// Lay id lam key user la value
function thaoTac(user)
{
    if(!Array.isArray(user))
        throw new Error("Loi Array")

    const map=new Map() 
    for(let x of user)
    {
        if(!x || typeof x !== "object")
            throw new Error("Loi Object")

        const {id,name}=x

        map.set(id,name) 
    }
    return map
}
console.log(thaoTac(user))
// Tim User
const duLieu=thaoTac(user)
function timUser(id)
{
    if(!id || typeof id !== "number" || id <=0)
        throw new Error("Loi ID")

    
        if(duLieu.has(id))
        {

            return duLieu.get(id)
        }else
        {
            return{
                message:"KHONG TIM THAY"
            }
        }
    
}
console.log(timUser(2))