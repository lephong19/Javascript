- Error handling là gì : Là cách chương trình phát hiện , tạo , bắt và xử lý lỗi thay vì để lỗi làm chương trình dừng.


              Code
               │
               ↓
             try
               │
        ┌──────┴──────┐
        │             │
     không lỗi       lỗi
        │             │
        ↓             ↓
      tiếp tục       catch
        │             │
        └──────┬──────┘
               ↓
            finally