class Student{
    #listScore=[];
    constructor(ma,ten,listScore=[]){
        if(typeof ma !== "string" || ma.trim()===''){
            throw new Error('loi_ma_sinh_vien');
        }

        if(typeof ten !== "string" || ten.trim()===''){
            throw new Error('loi_ten_sinh_vien');
        }

        if(!Array.isArray(listScore) || listScore.length===0){
            throw new Error('loi_danh_sach_diem');
        }

        listScore.forEach((value)=>{
            if(value===null|| typeof value!=='object'||Array.isArray(value)){
                throw new Error('loi_bang_diem');
            }

            for(const score of Object.values(value))
            {
                if(typeof score !=='number'||
                    !Number.isFinite(score)||
                    score<0 || score>10
                )
                throw new Error('loi_diem');
            }
        })
        
        this.ma=ma.trim();
        this.ten=ten.trim();
        this.#listScore=listScore.map((value)=>[...value]);
    }
    getScore(){
        return this.#listScore=this.#listScore.map((value)=>[...value]);
    }
}

/*
StudentManager quản lý nhiều sinh viên.
Không cho thêm hai sinh viên có cùng mã.
Tìm sinh viên theo mã và lấy danh sách sinh viên đạt điểm trung bình từ 8 trở lên.
 */