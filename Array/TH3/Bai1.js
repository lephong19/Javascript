const a = [10, 20];
const b = a;
/**
 a--> Đối tượng chứa [10,20] <--b
Cả 2 đều thay đổi
 */
b.push(30);
b[0] = 99;

console.log(a);// 99 10 30
console.log(b);// 99 10 30
console.log(a === b);// true