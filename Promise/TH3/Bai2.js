// const task = new Promise((resolve, reject) => {
//     console.log("A");
//     resolve(100);
//     console.log("B");
// });

// task.then(value => {
//     console.log(value);
// });

// console.log("C");

// /*
// Thực thi const task=new Promise
// In A -> vì chưa có dấu hiệu ngưng hàm
// Gặp resolve(100)-> ngưng
// Gặp task.then -> đưa vào microtask vì bất đồng bộ
// In C
// Lúc này hết mã đồng bộ quay lại microtask gặp task.then 
// In 100
// In B

// OUTPUT: 
// A 
// C
// 100
// B
//  */


console.log("A");

const task = new Promise((resolve) => {
    console.log("B");
    resolve();
    console.log("C");
});

task.then(() => {
    console.log("D");
});

console.log("E");

Promise.resolve().then(() => {
    console.log("F");
});
/*
A 
B
C
E
D
F
 */