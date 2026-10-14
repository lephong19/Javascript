async function run() {
    try {
       await Promise.reject(new Error("FAIL"));
        console.log("A");
    } catch (error) {
        console.log("B");
    }

    console.log("C");
}
 run();

// const task = new Promise((resolve,reject)=>{
//     reject(new Error("FAIL"))

//     console.log("A")
// })
// console.log("C");
// task.catch((err)=>{
//     console.log(err)
// })