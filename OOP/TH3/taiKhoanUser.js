const fs=require("node:fs/promises");
const path=require("node:path");
const file=path.join(__dirname,"./user.json");

class QuanLyTaiKhoan {
    #password;
   
    constructor(id, name, email, password, isActive = true) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("loi_id_user");
        }

        if (typeof name !== "string" || name.trim() === "") {
            throw new Error("loi_name_user");
        }

        if (typeof email !== "string" || !QuanLyTaiKhoan.isValidEmail(email)) {
            throw new Error("loi_email_user");
        }

        if (!QuanLyTaiKhoan.isValidPassword(password)) {
            throw new Error("loi_password_user");
        }

        if (typeof isActive !== "boolean") {
            throw new Error("loi_active_user");
        }

        this.id = id;
        this.name = name.trim();
        this.email = email.trim().toLowerCase();
        this.#password = password;
        this.isActive = isActive;
       
    }
     toStorageObject(){
        return {
            id:this.id,
            name:this.name,
            email:this.email,
            isActive:this.isActive
        }
    }
    static async getFile(){
        try{
            const du_lieu=await fs.readFile(file,"utf-8");
            return JSON.parse(du_lieu);
        }catch(err){
            if(err.code==="ENOENT"){
                await fs.writeFile(file,'[]',"utf-8");
                return [];
            }
            throw err;
        }
    }
    async ghiFile(){
       const users=await QuanLyTaiKhoan.getFile();
       const emailExists=users.some(
        user=>user.email===this.email
       );
       if(emailExists)
        throw new Error('trung_email');

       users.push(this.toStorageObject());
       await fs.writeFile(
        file,
        JSON.stringify(users,null,2),
        "utf-8"
       )
       return this.toStorageObject();
    }
    static isValidEmail(email) {
        return typeof email === "string" &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    }

    static isValidPassword(password) {
        return typeof password === "string" &&
            password.length >= 6 &&
            /^[a-zA-Z0-9 !@#$%^&*]+$/.test(password);
    }

    changePassword(currentPassword, newPassword) {
        if (!this.isActive) {
            throw new Error("tai_khoan_da_vo_hieu_hoa");
        }

        if (typeof currentPassword !== "string" ||
            currentPassword !== this.#password) {
            throw new Error("xac_thuc_mat_khau_sai");
        }

        if (!QuanLyTaiKhoan.isValidPassword(newPassword)) {
            throw new Error("loi_password_user");
        }

        if (newPassword === this.#password) {
            throw new Error("mat_khau_moi_phai_khac_mat_khau_cu");
        }

        this.#password = newPassword;

        return { message: "doi_mat_khau_thanh_cong" };
    }
    checkPassword(password){
        return this.#password===password;
    }
    deactivate() {
        if (!this.isActive) {
            throw new Error("tai_khoan_da_vo_hieu_hoa");
        }

        this.isActive = false;
        return true;
    }

    activate() {
        if (this.isActive) {
            throw new Error("tai_khoan_dang_hoat_dong");
        }

        this.isActive = true;
        return true;
    }

    getPublicProfile() {
        return this.toStorageObject();
    }
}

// Kiểm thử
async function main() {
    try{
        const user = new QuanLyTaiKhoan(
            2,
            "Tian",
            "pTian@example.com",
            "abc123hbdb",
            true
        );
        //console.log(await user.ghiFile())
        //console.log(user.getPublicProfile());

        //console.log(user.changePassword("abc123hbdb", "xyz789"));
        console.log(user.checkPassword("xyz789"))
        //console.log(user.deactivate());

    }catch(err){
        console.log(err.message);
    }
}
main();
// Phải báo lỗi vì tài khoản đã bị vô hiệu hóa
// user.changePassword("xyz789", "new123");
