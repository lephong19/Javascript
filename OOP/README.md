1. Khái niệm: OOP là lập trình hướng đối tượng, cách tổ chức chương trình xoay quanh các đối tượng chứa dữ liệu và hành vi xử lý dữ liệu 

2. Các thao tác:
- Khai báo lớp
class User{
    // code 
}

- Khởi tạo đối tượng:Được gọi khi thực hiện
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
}
Gọi: const user=new User("Nguyen Van A","NVA@gmail.com");

+ Trong đó: this là đối tượng hiện tại