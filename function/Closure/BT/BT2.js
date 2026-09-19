function createUserManager(){
    const listUser=[
    {id:1,name: "Phong",age: 20,role: "Student"}

    ]
    let idUser=listUser.length
    // function addUser(user){
           
            
    //     if(user===null||typeof user !== "object"||Array.isArray(user))
    //         throw new Error("Loi user")

    //     if("id" in user)
    //         throw new Error("Nguoi dung su dung ID do QTV Ban Hanh")
    //     if(!user.name || typeof user.name!=="string")
    //         throw new Error("Loi name")

    //     if(!Number.isInteger(user.age)||user.age<=18 || user.age>100)
    //         throw new Error("Loi age")

    //     if(!user.role || typeof user.role!=="string"|| (user.role!=="Student" && user.role!=="Worker"))
    //         throw new Error("Loi role")
    //     let obj={
    //         id:idUser+=1,
    //         ...user,
    //     }
    //     listUser.push(obj)
    //     return {message:"Them Thanh Cong"}
    // }
    function addUsers(users){
        if(!Array.isArray(users))
            throw new Error("Loi users")

        for(let i =0; i < users.length; i++){
            let user=users[i]
             if(user===null||typeof user !== "object"||Array.isArray(user))
            throw new Error("Loi user")

        if("id" in user)
            throw new Error("Nguoi dung su dung ID do QTV Ban Hanh")
        if(!user.name || typeof user.name!=="string")
            throw new Error("Loi name")

        if(!Number.isInteger(user.age)||user.age<=18 || user.age>100)
            throw new Error("Loi age")

        if(!user.role || typeof user.role!=="string"|| (user.role!=="Student" && user.role!=="Worker"))
            throw new Error("Loi role")

         let obj={
            id:idUser+=1,
            ...user,
        }
        listUser.push(obj)
        }
        return {
            message:"Them Thanh cong"
        }
    }
    function findUser(id){
        if(listUser.length===0){
            throw new Error("DS RONG")
        }
        if(!Number.isInteger(id)||id<=0)
            throw new Error("Loi id")

        const indexUser=listUser.findIndex(i=>i.id===id)
        if(indexUser===-1) throw new Error("Khong Tim Thay user")

        return {
            message: "Tim Thay USER",
            Thong_Tin_User:listUser[indexUser]
        }
    }
    function resetIDWhenDel(index){
        for(let i=index; i < listUser.length;i++){
            listUser[i].id--
        }
    }
    function deleteUser(id){
         if(listUser.length===0){
            throw new Error("DS RONG")
        }
        if(!Number.isInteger(id)||id<=0)
            throw new Error("Loi id")

        const indexUser=listUser.findIndex(i=>i.id===id)
        if(indexUser===-1) throw new Error("Khong Tim Thay user de xoa")

        listUser.splice(indexUser,1)
        idUser--
        resetIDWhenDel(indexUser)
        return {
            message:"Xoa Thanh Cong"
        }
    }
    function getUsers(){
        if(listUser.length===0)
            throw new Error("Ds rong")
        let a=[]
       
        for(let i=0; i < listUser.length; i++){
            let obj={...listUser[i]}
                    a.push(obj)

        }
        return a
    }
    function groupByRole(){
        if(listUser.length===0)
            throw new Error("Ds rong")
        let a={}
        for(let x of listUser)
        {
            const {id,name,age,role}=x
            if(!a[role]){
                a[role]=[]
            }
            a[role].push({
                id,
                name,age
            })
        }
        return a 
    }
    return {addUsers,findUser,deleteUser,getUsers,groupByRole}
}
const test=createUserManager()
try{
    const add=test.addUsers([{
        name:"Nguyen Van A",
        age:19,
        role:"Worker"
    },
    {
        name:"Tran Van X",
        age:19,
        role:"Student"
    },
    {
        name:"Nguyen Van Khanh H",
        age:23,
        role:"Worker"
    },
    {
        name:"Tran Thi Tra MY",
        age:24,
        role:"Worker"
    }]

)
    console.log(add.message)


    //const find=test.findUser(1)
    //console.log(find)

    //console.log(test.getUsers())
    console.log(test.groupByRole())
}catch(err){
    console.log(err.message)
}