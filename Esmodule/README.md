- ES Module là cơ chế cho phép chia 1 chương trình to thành nhiều file/module độc lập

- Module là một file có phạm vi riêng, có thể chủ động "đưa ra ngoài" một số thứ và nhận thứ từ module khác.



1. Thao tác chính
- Trong ES Module có 2 thao tác chính là:
A. export : Cho phép thứ_này(có thể là function , biến ..) được module khác sử dụng
+ Có 2 loại export quan trọng: 
-->Named Export: Tên import phải tương ứng với thứ được export  , 
-->Default Export : Mỗi chương trình chỉ có tối đa 1 default export khi import gọi tên gì cũng được
B. import : Lấy thứ được module khác export vào chính nó