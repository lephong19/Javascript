/*
Thêm 5 sinh viên.
Lấy tên sinh viên theo id.
Kiểm tra một id có tồn tại không.
Cập nhật tên sinh viên.
Xóa một sinh viên.
Kiểm tra số lượng sinh viên còn lại.
*/
const map=new Map() 
map.set(1,"Nguyen Van A")
map.set(2,"Le Thi B")
map.set(3,"Tran Van C")
console.log(map)

// Yeu cau 2 
console.log(map.get(1))

// Kiem tra ton tai id 
console.log(map.has(34))

// Cap nhat ten
map.set(1,"Nguyen Van B")
console.log(map)

map.delete(1)
console.log(map)