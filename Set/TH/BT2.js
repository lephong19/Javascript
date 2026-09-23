const users=[
    {id:101,name:'Nguyen Van A',age:23,active:true},
    {id:105,name:'Le Thi T', age:19, active:true},
    {id:102,name:'Thieu Ng BT' , age:19 , active:false},
    {id:207,name:'Le Toan P', age:19 ,active:false},
    {},
]
/*
207 -> {102,105}
102 -> {101}
105 -> {101}
 */
const following=new Map()
const setLuuIdUser=new Set()

for(let x of users){
    let loiObj=false
let loiID=false
let loiName=false
let loiAge=false
let loiActive=false
     if(x===null || typeof x !== 'object' || Array.isArray(x))
        loiObj=true
    const {id,name,age,active}=x
   if(!Number.isInteger(id) || id <=0 )
    loiID=true

   if(typeof name !=='string' || name.trim()==='')
    loiName=true

     if(!Number.isInteger(age) || age <=15 )
        loiAge=true

     if(typeof active !== 'boolean')
        loiActive=true

     
     if(!loiObj && !loiID && !loiName && !loiAge &&!loiActive)
        setLuuIdUser.add(id)
}
function follow(userID,targetUserID){

    if(!Number.isInteger(userID) || userID <= 0 )
        throw new Error('loi_userID')
     if(!Array.isArray(targetUserID) || targetUserID.length===0)
        throw new Error('loi_ds_fl')


      const indexNguoiFl=users.findIndex(i=>i.id===userID)

     if(indexNguoiFl===-1)
        throw new Error('loi_following')

      let listFl=following.get(userID)
     if(!listFl){
        listFl=new Set()
     }
     for(let x of targetUserID){
        if(!Number.isInteger(x) || x <= 0 || !setLuuIdUser.has(x))
            throw new Error('loi_targetID_khong_hop_le')
         if(x===userID)
        throw new Error('id_trung')

         if(listFl.has(x))
        throw new Error('loi_user_nay_da_duoc_fl')
       

          listFl.add(x)
     }
    
   
    
     following.set(userID,listFl)
     return following
}

try{
    console.log(follow(102,[102]))
}catch(err){
    console.log(err.message)
}