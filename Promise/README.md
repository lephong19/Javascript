- Promise là một đại diện cho một tác vụ bất đồng bộ
- Promise có 3 trạng thái: pending -> fulfilled hoặc pending->rejected
1. Tạo Promise -> new Promise()
2. Excutor function: (resolve,reject)=>{}
+ resolve()(đi với then): Đưa Promise sang trạng thái thành công
+ reject()(đi với catch): Đưa Promise sang trạng thái thất bại

- .then() : Xử lý Promise thành công
- .catch(): Xử lý Promise thất bại
- .finally(): Chạy nhau Promise kết thúc , bất kể thất bại / thành công


3. Promise bất đồng bộ: setTimeout+Promise
4. Promise chaining : .then().then().then() ,là chuỗi các bước xử lý promise , nối với nhau bằng return
5. Promise.resolve(): Tạo Promise fulfilled
6. Promise.reject(): Tạo Promise rejected
7. Promise.all(): Chờ nhiều Promise cùng hoàn thành(thành công)
8. Promise.allSettled(): Lấy kết quả của tất cả Promise dù thành công/thất bại
9. Promise.race(): Lấy Promise hoàn thành đầu tiên(setTimeout min I)
10. Promise.any(): Lấy Promise thành công đầu tiên
11. Promise + async/await: Cách viết hiện đại dựa trên Promise
- async/await : 
+ function get(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //
        })
    })
}
+ async function test(){
    try{
        const data=await get()
    }catch(err)
}
