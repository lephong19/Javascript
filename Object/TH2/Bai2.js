const user=Object.freeze(
    {
    name:"An",
    age:10,
    address:{
        city:"BD"
    }
}
)
user.address.city="HCM"
user.address.country="VIETNAM";
console.log(user)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
