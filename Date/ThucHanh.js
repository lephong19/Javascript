const now = new Date();

console.log("Date:", now);

console.log("Năm:", now.getFullYear());
console.log("Tháng:", now.getMonth() + 1);// Bắt đầu từ 0 nên +1
console.log("Ngày:", now.getDate());
console.log("Thứ:", now.getDay());

console.log("Giờ:", now.getHours());
console.log("Phút:", now.getMinutes());
console.log("Giây:", now.getSeconds());

console.log("Timestamp:", now.getTime());