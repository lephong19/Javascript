Map là cấu trúc dữ liệu dùng để lưu cặp ' key -> value '

*Chú ý:
-Mỗi key là duy nhất(unique)
-Nếu thêm key->value mới nhưng key trùng value mới , thì sẽ lưu key cũ value mới
-Khác với object , key của map không bắt buộc là string

1.Các thao tác
-set(): Thêm hoặc cập nhật , nếu key tồn tại thì cập nhật, và ngược lại
-get(): Lấy value , điều đặc biệt là truy cập key
-has(): Kiểm tra tồn tại
-delete() : Xóa theo key
-size():Kích thước map
-clear() : Xóa toàn bộ
-Duyệt map:for..of
+keys():Lấy các key
+values():Lấy các value
+entries():Lấy toàn bộ
-for..each: value->key