- 4 Hàm quan trọng nhất trong chuyển đổi
+ Object.keys(obj) : Kết quả là Array chứa key
+ Object.values(obj): Kết quả là Array chứa value
+ Object.entries(obj): Array chứa cặp [key,value]
+ Object.fromEntries(arr): Trả về object



==============
Ta có const user ={
    name:'Phong',
    age:19
    address{
        city:'BD'
    }
}

Lại có các lần lượt là : a , b , c
Th1: a=user thì lúc này a và user cùng trỏ đến Object gọi là Obj chứa name, city, address

Th2: b={...user} lúc này b sao chép user tạo ra bản sao gồm name,age và address lúc này cả b và user đều dùng chung(trỏ tới),b tác động lên address thì address ở user cũng thay đổi và b tác động lên name , age thì user không bị thay đổi

Th3: c=structureClone(user) gọi là deep copy lúc này c sao chép toàn bộ những thứ có trong user mọi tác động ở c không thay đổi ở user 

============================
- Đặt default :  nếu dữ liệu không có giá trị(undefined) thì dùng giá trị mặc định thay thế,nếu đã tồn tại thì sẽ không thay đổi -> default không được sử dụng
ví dụ: 
const user = {
    name: "Phong",
    age: 20
};


const {
    name,
    role = "user" -> Đặt default 
} = user;
* Lưu ý: role không được thêm vào thành một property của user 
chỉ được : console.log(role) // user
=====================================
- rest : Lấy những property còn lại khi đã lấy một số property cụ thể

Ví dụ: const user = {
    id: 1,
    name: "Phong",
    age: 20,
    role: "admin"
};

const { name, ...rest } = user;
- Lúc này rest chứa : id , age ,role

============================
optional chaining
- Khái niệm ?. là gì :
ví dụ:
const user = {
    name: "Phong",
    address: {
        city: "HCM"
    }
};

console.log(user.address.city); hoàn toàn ổn vì có dữ liệu(tồn tại)
+ Nhưng nếu user chỉ có {name: 'Phong'} -> console.log(user.address.city) gây lỗi

-> ?. giải quyết vấn đề này: 
console.log(user.address?.city); Lúc này user.address sẽ dừng lại trả về undefined thay vì crash

-> ?. chỉ dừng khi gặp null hoặc undefined

- Vậy ?? là gì : Là giá trị mặc định , nó hỏi rằng khi dữ liệu kiểm tra null hoặc undefined thì tôi sẽ dùng giá trị gì 