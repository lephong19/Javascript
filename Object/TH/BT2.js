/*
Thực hiện các thao tác: 
+ Thêm key
+ Update key
+ Delete key 
+ Kiểm tra key tồn tại
+ In 
*/
const user = {
    name: "Phong",
    age: 20
};
user.role='student'
const update={
    ...user,
    age:21
}
delete update.role
console.log(user)
console.log(update)
console.log('role' in update)
console.log('role' in user)
console.log(user.name)
console.log(user['name'])