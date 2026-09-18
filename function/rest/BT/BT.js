
function tong(...nums){
    let i=0;
    let sum=0;
    while(i < nums.length){
        sum += nums[i];
        i++;
    }
    return sum;
}
//console.log(tong(2,4,5))

function timMax(...numbers){
    if(numbers.length===0){
        throw new Error("Loi kich thuoc")
    }
    let maxVal=numbers[0];

    let i=0;
    while(i < numbers.length){
        if(numbers[i]>maxVal){
            maxVal=numbers[i];
        }
        i++;
    }
    return maxVal;
}
console.log(timMax(3,5,6,2,66,33))

function countTypes(...values){
    const obj={
        number:0,
        string:0,
        boolean:0,
    }

    for(let i=0; i < values.length;i++){
        if(typeof values[i]==="string")
        {
            obj.string+=1
        }
        if(typeof values[i]==="number"){
            obj.number+=1
        }
        if(typeof values[i]==="boolean"){
            obj.boolean+=1
        }
    }
    return obj
}
//console.log(countTypes(10,"hello",true,20,"JS"))


function tinhDiemSv(name,...scores){
    if(!name || typeof name !== "string"){
        throw new Error("Loi name")
    }
    if(scores.length===0){
        throw new Error("Loi bang diem ")
    }

    let sum=0;
    let n=scores.length
    let obj={}
    for(let i=0; i < scores.length; i++){
        if(scores[i]<0){
            n--;
            continue
            
        }
        sum += scores[i]
    }
    obj={
        name:name,
        scores:sum/n
    }
    return obj
}
//console.log(tinhDiemSv("Nguyen Van A",8,7,9))
const users = [
    { name: "Phong", role: "admin" },
    { name: "An", role: "user" },
    { name: "Nam", role: "admin" },
    { name: "Lan", role: "manager" }
];
function findUserByRoles(users,...roles){
    if(!Array.isArray(users)||users.length===0)
        throw new Error("Loi users")

    if(roles.length===0)
        throw new Error("Loi roles")

    // roles=[admin,maneger]
    const a=[]
    for(let i=0;i< users.length ;i++){
        if(roles.includes(users[i].role)){
            a.push({
                name:users[i].name,
                role:users[i].role
            })
        }
    }
    return a
}
console.log(findUserByRoles(users,"admin","manager"))