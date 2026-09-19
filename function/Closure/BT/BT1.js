const database=[
    {name:"Nguyen Van A",password:"1234556"},
    {name:"Le Thi B",password:"12346dea"}
]
function createLogin(database , nameLogin , passwordLogin){
    let soLanDangNhap=0
    function dangNhap(){
            let successful=false

        if(soLanDangNhap===3)
            throw new Error("Account is locked")

        for(let x of database){

            if(nameLogin===x.name && passwordLogin===x.password){
                successful=true
                throw new Error("Login successful")
            }
            if(nameLogin===x.name && passwordLogin!==x.password){
                successful=false
            }
            if(nameLogin!==x.name && passwordLogin===x.password){
                successful=false
            }
            
        }
        soLanDangNhap++
        if(!successful){
                throw new Error("Login Fail")
            }
    }
    function soLanDaDangNhap(){
        return soLanDangNhap
    }
    return{
        dangNhap,soLanDaDangNhap
    }
}
const test=createLogin(database,"Nguyen Van A","123456")
try{
    test.dangNhap()
}catch(err){
    console.log(err.message)
}