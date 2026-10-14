// const user1 = { id: 1, name: "An" };
// const user2 = user1;
// const user3 = { ...user1 };
// /*
// user1 va user2 cùng cha
// user3 khác cha
//  */
// user2.name = "Binh";
// user3.id = 99;

// console.log(user1);//{id:1, name:"Binh"}
// console.log(user2);//{id:1, name:"Binh"}
// console.log(user3);// {id:99, name:"An"};
// console.log(user1 === user2);//true
// console.log(user1 === user3);//false


const user={
    name:"An",
    address:{
        city:"HCM",
    },
    skills:["JS","Node"]
};
const copied={...user};

