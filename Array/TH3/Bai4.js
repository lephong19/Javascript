// const number=[3,7,2,8,5,10];

// const soDauTienLonHon5=number.find(i=>i>5);
// console.log(soDauTienLonHon5);
// number.splice(0,1);
// console.log(number);

// const values=["js","node","js","api","node","js"];

// const res=values.reduce((acc,pt)=>{
//     if(acc[pt]){
//         acc[pt]++;
//     }else{
//         acc[pt]=1;
//     }
//     return acc;
// },{})
// console.log(res);

// const numbers=[2,5,8,3,10,5];
// const numbers1=numbers.map(i=>i*2);
// // console.log(numbers.map(i=>i*2));
// console.log(numbers1.filter(i=>i%2===0));

// const sum=numbers.reduce((acc,pt)=>{
//     return acc +=pt
// },0)
// console.log(sum);

// const tanSuat=numbers.reduce((acc,pt)=>{
//     if(acc[pt])
//         acc[pt]++;
//     else
//     acc[pt]=1;

//     return acc;
// },{})
// console.log(tanSuat);

// const res=numbers.flatMap(n=>[n,n*2]);
// console.log(res);

// const res1=numbers.flat(n=>[n,n*2]);
// console.log(res1);

// const res2=numbers.map(n=>[n,n*2]);
// console.log(res2);

// const numbers=[2,5,8,3,10,5];
// const map=numbers.map(n=>[n,n*2]);
// console.log(map);
// console.log(map.flat())

// const a=[1,2,[3,4,[5,6]]];
// const res=a.flat().flat();
// console.log(res.slice(0,3));// 1 , 2 , 3

// console.log(res.slice(0,3).concat([7,8]));
// console.log(a);
// console.log(Array.from("node"))
// console.log(Array.of(4))
// console.log(Array(4))
// console.log(a.toString())


// const items=["js","node","api"];
// const str="Hoc Lap Trinh";
// console.log(items.at(-1))
// console.log(items.length-1)
// console.log(str.split("/\s+/"))

// const numbers=[2,10,3,25,100,-4];
// // const a=numbers.sort();
// // console.log(a);
// // console.log(numbers)

// numbers.sort((a,b)=>b-a)
// console.log(numbers)
// // 
// /*
// vi du: 2 ,3 -> 2-3=-1 // tang dan
// 4,1 -> 4-1=3>0
// */

// const names=["phong","an","Binh","An","chi"];
// // console.log(names.sort())
// // const res=[...names].sort();
// // console.log(res);
// console.log(names)
// console.log(names.sort());


// const values = ["js", "node", "js", "api", "node", "js"];
// const res=values.reduce((acc,pt)=>{
//     if(acc[pt])
//         acc[pt]++;
//     else
//         acc[pt]=1;

//     return acc;
// },{});
// console.log(res)

// const values = [1, 2, 2, 3, 1, 4, 3];
// // const set=new Set(values);
// // console.log(set);

const items=[
    "GD01", "GD02", "GD03", "GD04", "GD05",
    "GD06", "GD07", "GD08", "GD09", "GD10",
]
function paginate(items,page,limit){
    if(!Array.isArray(items) || items.length===0){
        throw new Error('loi_ds_items')
    }

    if(!Number.isInteger(page) || page<=0)
        throw new Error('loi_page');

    if(!Number.isInteger(limit) || limit<=0 || limit>items.length)
        throw new Error('loi_limit');
    const batDau=(page-1)*limit;
    const ketThuc=batDau+limit;
    const du_lieu_trang=items.slice(batDau,ketThuc);
    return {
        Data:du_lieu_trang,
        totalItems:items.length,
        
    }
}
console.log(paginate(items,2,8))
/*
: 0->5

1
GD01:0
GD02:1
GD03:2
GD04:3
GD05:4
====
2
GD06:5
GD07:6
GD08:7
GD09:8
GD010:9
 */