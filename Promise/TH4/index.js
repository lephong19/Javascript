// function xuLyDuLieu(number,callback){
//     return callback(number);
// }
// const result=(a=>a**2);
// console.log(xuLyDuLieu(5,result));


// function kiemTraSoChan(number){
//     return new Promise((resolve,reject)=>{
//         if(number%2===0)
//             return resolve("So chan");

//         return reject("So le");
//     })
// }

// const check=kiemTraSoChan(101);

// check.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// const user={
//     id:101,
//     name:"Nguyen Van A",
//     email:"example@gmail.com"
// }
// function getUser(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(!Number.isInteger(id) || id<=0)
//             return reject(new Error('loi_id'))
        
//             if(user.id===id)
//                 return resolve(user);

//             return reject('khong_phai_user');
//         },1000)
//     })
// }

// const client=getUser(100);

// client.then((data)=>{
//     return data;
// })
// .then((data)=>{
//     return data.email;
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


const user={
    name:"Phong",
    age:19,
    email:"example@gmail.com"
}
function getName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof name !=='string'|| name.trim()==='')
                return reject(new Error('loi_name'));

            if(user.name===name)
                return resolve(name);

            return reject("NOT_FOUND_NAME");
        },2000);
    })
}
function getAge(age){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!Number.isInteger(age)|| age<=10)
                return reject(new Error('loi_age'));

            if(user.age===age)
                return resolve(age);

            return reject("NOT_FOUND_AGE");
        },3000);
    })
}
function getEmail(email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             if(typeof email !=='string'|| email.trim()==='')
                return reject(new Error('loi_email'));

            if(user.email===email)
                return resolve(email);

            return reject("NOT_FOUND_EMAIL");
        },1000);
    })
}
async function main() {
    try {
        const name = await getName("Phong");
        console.log("Name:", name);

        const age = await getAge(19);
        console.log("Age:", age);

        const email = await getEmail("aaa@gmail.com");
        console.log("Email:", email);

    } catch (err) {
        console.log("Có lỗi:", err.message ?? err);
    }
}

main();