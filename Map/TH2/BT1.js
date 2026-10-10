// // const a=["js","java","js","python","java","js"];
// // function timTanSuat(a){
// //     const map=new Map()
// //     for(let x of a ){
// //         if(!map.has(x)){
// //             map.set(x,1);
// //         }else{
// //             let val=map.get(x);
// //             val+=1;
// //             map.set(x,val);
// //         }
// //     }
// //     return map;
// // }
// // console.log(timTanSuat(a));


// const a=[
// {id: "P01", name: "Mouse", quantity: 2},
// {id: "P02", name: "Keyboard", quantity: 1},
// {id: "P01", name: "Mouse", quantity: 3},
// {id: "P03", name: "Monitor", quantity: 2},
// ]
// function thongKeTheoID(a){
//     const map=new Map();

//     for(let x of a){
//         if(!map.has(x.id)){
//             map.set(x.id,x.quantity);
//         }else{
//             let so_luong=map.get(x.id);
//             so_luong += x.quantity;
//             map.set(x.id,so_luong);
//         }
//     }
//     return map
// }
// console.log(thongKeTheoID(a));
const Sacombank = [
    { name: "An", balance: 300 },
    { name: "Binh", balance: 2000 }
];

const map = new Map();

// 1. Khởi tạo số dư ban đầu
for (const x of Sacombank) {
    map.set(x.name, x.balance);
}

// 2. Thực hiện giao dịch
function thuc_hien_giao_dich(name, money) {
    // Kiểm tra tài khoản
    if (!map.has(name)) {
        return {
            success: false,
            message: "khong_tim_thay_tai_khoan"
        };
    }

    // Kiểm tra số tiền
    if (typeof money !== "number" || !Number.isFinite(money) || money === 0) {
        return {
            success: false,
            message: "so_tien_khong_hop_le"
        };
    }

    const soDuHienTai = map.get(name);

    // Rút tiền
    if (money < 0) {
        const soTienRut = Math.abs(money);

        if (soDuHienTai < soTienRut) {
            return {
                success: false,
                message: "khong_du_tien_thanh_toan"
            };
        }

        map.set(name, soDuHienTai - soTienRut);
    }

    // Nạp tiền
    else {
        map.set(name, soDuHienTai + money);
    }

    return {
        success: true,
        message: "giao_dich_thanh_cong",
        balance: map.get(name)
    };
}

// 3. Kiểm thử
console.log(thuc_hien_giao_dich("An", 200));
console.log(thuc_hien_giao_dich("An", -100));
console.log(thuc_hien_giao_dich("An", -500));
console.log(thuc_hien_giao_dich("Binh", -3000));
console.log(thuc_hien_giao_dich("Chi", 100));

// 4. In số dư cuối cùng
console.log("Số dư cuối cùng:");

for (const [name, balance] of map) {
    console.log(`${name}: ${balance}`);
}