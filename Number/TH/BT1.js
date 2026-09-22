// 1. toString()
// number → string
let num = 12345;
console.log(num.toString()); // "12345"


// 2. toFixed()
// Giữ số chữ số sau dấu thập phân
let price = 5.56789;
console.log(price.toFixed(2)); // "5.57"


// 3. Number.isFinite()
// Kiểm tra có phải số hữu hạn không
console.log(Number.isFinite(100));      // true
console.log(Number.isFinite(Infinity)); // false


// 4. Number.isInteger()
// Kiểm tra có phải số nguyên không
console.log(Number.isInteger(10));   // true
console.log(Number.isInteger(10.5)); // false


// 5. Number.isNaN()
// Kiểm tra có chính xác là NaN không
console.log(Number.isNaN(NaN));  // true
console.log(Number.isNaN(100));  // false


// 6. Number.parseInt()
// Phân tích → số nguyên
console.log(Number.parseInt("123.45")); // 123
console.log(Number.parseInt("100px"));  // 100


// 7. Number.parseFloat()
// Phân tích → số thực
console.log(Number.parseFloat("123.45")); // 123.45
console.log(Number.parseFloat("10.5px")); // 10.5


// 8. toLocaleString()
// number → string theo locale
let money = 1000000;
console.log(money.toLocaleString("vi-VN")); // "1.000.000"
console.log(money.toLocaleString("en-US")); // "1,000,000"