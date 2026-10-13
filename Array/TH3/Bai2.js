const original=[1,2,3];
/*a và original cùng trỏ vào 1 đối tượng 
Mọi thay đổi từ a hay original đều ảnh hưởng đến thằng kia
a===b -> true
*/
const a=original;

const b=[...original];
/*b tạo 1 đối tượng có cùng thông tin như original  
Mọi thay đổi từ b hay original đều không ảnh hưởng đến thằng kia
a===b -> false
*/
const c=original.slice();
b.push(4);
c[0]=99;
/*
original =[1,2,3];
a=[1,2,3];
b=[1,2,3,4]
c=[99,2,3];
 */
console.log(original);
console.log(a);
console.log(b);
console.log(c);