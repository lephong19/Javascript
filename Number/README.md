- toString(): Chuyển số thành dạng chuỗi
- toFixed(số lượng): ví dụ num=5.56789 , gọi toFixed(2)--> 5.57

- Number.isFinite(): kiểm tra giá trị có phải là số hữu hạn không
- Number.isInteger(): Kiểm tra giá trị có phải là số nguyên không
- Number.isNaN(): Not-a-number trả về true / false
- Number.parseInt() : Phân tích và trả về một số nguyên
- Number.parseFloat() : Phân tích và trả về một số thực(Có phần thập phân)
- toLocaleString() : chuyển thành chuỗi dựa trên ngôn ngữ ng dùng
+ Ví dụ:let num = 1000000;
console.log(num.toLocaleString('vi-VN'));
 Kết quả: "1.000.000"

===============================
So Sánh c++ và JS
INT_MIN=Number.MIN_SAFE_INTEGER
