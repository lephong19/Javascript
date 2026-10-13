// console.log(true && "Node.js");
// console.log(false && "Node.js");
// console.log(true || "Backend");
// console.log(false || "Backend");
// console.log(!"");
// console.log(!![]);
// console.log(!!0);

console.log(null ?? "Guest");//Guest 
console.log(undefined ?? "Guest");//Guest
console.log(0 ?? 100);//0
console.log(false ?? true);//false
console.log("" ?? "Default");// ""
console.log(NaN ?? 10);//NaN