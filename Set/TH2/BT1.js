// const a=[1,2,2,3,1,4,3,5];

// const set= new Set(a);
// console.log(set);


// const a=["A@gmail.com", "b@gmail.com", " a@gmail.com ", " B@gmail.com", "c@gmail.com "];
// const b=[];
// a.forEach((value)=>{
//     b.push(value.trim().toLowerCase());
// })
// const set=new Set(b)
// console.log(set);

// const a=[101, 102, 103, 101, 104, 102, 105];

// const so_nguoi_dung_duy_nhat=new Set(a);
// console.log(so_nguoi_dung_duy_nhat.size);
// console.log(so_nguoi_dung_duy_nhat.has(103))
// console.log(so_nguoi_dung_duy_nhat.has(999))

const a=[1, 2, 3];
const b=[2,2,3];
function timGiao(a,b){
    const setA=new Set(a);

    const res=[]


    for(let x of b){
        if(setA.has(x)){
            res.push(x);
        }
    }
    return new Set(res);
}
console.log(timGiao(a,b));


const A=[1,2,3,4];
const B=[3,4,5,6];

function timPTThuocMotTap(A,B){
    const res=new Set(A);

    for(let x of B){
        if(res.has(x)){
            res.delete(x);
        }else{
            res.add(x);
        }
    }
    return res;
}
console.log(timPTThuocMotTap(A,B));