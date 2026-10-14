const ids = [1, 2, 3, 4, 5];

const users = [
    { id: 1, name: "An" },
    { id: 2, name: "Binh" },
    { id: 3, name: "Chi" },
    { id: 4, name: "Dung" },
    { id: 5, name: "Em" }
];
async function getUser(id) {
   try{
        if(!Number.isInteger(id)||id<=0)
            throw new Error('loi_id');

       
    const user=users.find(i=>i.id===id);

        if(!user)
            throw new Error ('khong_tim_thay');

        return user;

   }catch(err){
        throw err;
   }
}
async function getUsersByID(ids) {
    try{
        if(ids.length===0)
            return [];
        const a=[]
        for(let id of ids){
            const get=await getUser(id);
            
            a.push(get);
        }
        return a;
    }catch(err){
        throw err;
    }
}
async function main() {
    try{
        const getUsers=await getUsersByID([1,2,3])
        console.log(getUsers);
    }catch(err){
        console.log(err.message);
    }
}
main();