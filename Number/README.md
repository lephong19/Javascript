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
Number.MIN_SAFE_INTEGER: Số nguyên âm nhỏ nhất mà JS đảm bảo chính xác 



Number(true)=1
Number(false)=0
Number(null)=0
Number(underfined)=NaN