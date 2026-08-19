const arr=[1,2,3,4,5,5,4,6]

// Yêu cầu 1: Tạo set từ Array
const mySet=new Set(arr)
//console.log(mySet)

// Yêu cầu 2: Số Lượng phần tử
const soLuong=mySet.size
//console.log(soLuong)

// Yêu cầu 3 : Kiểm tra tồn tại
function kiemTraTonTai(mySet,key)
{
    if(mySet.size===0)
        throw new Error("SET RONG")

    if( typeof key !=="number")
        throw new Error("KEY KHONG HOP LE")

    if(mySet.has(key))
    {
        return{
            message:"PHAN TU TON TAI",
            GT_Phan_Tu:key
        }
    }
    return{
        message:"PHAN TU KHONG TON TAI",
        data:null
    }
}
//console.log(kiemTraTonTai(mySet,10))

// Yêu cầu 4: Loại bỏ trùng
function removeDuplicate(arr)
{
      if(!Array.isArray(arr))
        throw new Error("arr not is array")
    let SET=new Set(arr)
    let newArr=Array.from(SET)
    return newArr
}
//console.log(removeDuplicate(arr))

//===========================================
// Yêu cầu 5: Thêm và xóa
// Yêu cầu 5.1: Tạo set rỗng và lần lượt thêm các ngôn ngữ LT
const newSet=new Set() 
newSet.add("JavaScript")
newSet.add("C++")
newSet.add("Java")
newSet.add("Python")
console.log(newSet)
// Yêu cầu 5.2: Xóa Python
newSet.delete("Python")
console.log(newSet)