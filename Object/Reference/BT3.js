// Nếu address không tồn tại -> không được crash
// Nếu city không tồn tại -> Trả về 'Unknow'
const user = {
    name: "Phong",
   address:{
    city:'HCM',
    district:'Thu Duc'
   }
};
function getCity(user){
    if(user===null || typeof user!=='object' ||Array.isArray(user))
        throw new Error('Loi user')

   return user.address?.city ?? 'Unknow'

}
//console.log(getCity(user))
