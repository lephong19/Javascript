main()
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0); // Đăng ký timer

Promise.resolve().then(() => {
    console.log("C");
});

async function main() {
    console.log("D");

    await Promise.resolve();// Đưa vào microtask -> dừng main

    console.log("E");
}

// (async () => {
//     console.log("D");

//     await Promise.resolve();

//     console.log("E");
// })();

console.log("F");
async function main() {
    console.log("D");

    await Promise.resolve();

    console.log("E");
}
