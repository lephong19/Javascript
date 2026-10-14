const users = [
    { id: 1, name: "An", active: true },
    { id: 2, name: "Binh", active: false },
    { id: 3, name: "Chi", active: true },
    { id: 4, name: "Dung", active: false }
];

function checkActive(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(user.active);
        }, 500);
    });
}
async function getActiveUsers(users) {
    if(!Array.isArray(users))
        throw new Error("INVALID_USERS");

    if(users.length===0)
        return [];

    const res=[]
    // Kiểm tra
    for(let user of users){
        if(await checkActive(user))
        res.push(user);
    }
    return res
    
    // Trả về mảng
}
async function main() {
    try{
        const isActive=await getActiveUsers(users);
        console.log(isActive);
    }catch(err){
        console.log(err.message);
    }
}
main();