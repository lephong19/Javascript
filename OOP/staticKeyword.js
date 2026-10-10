class User{
    static userCount=0;
    constructor(username){
        this.username=username;
        User.userCount++;
    }
}
const user1= new User("I am");
console.log(user1.username)
console.log(user1.userCount)
console.log(User.userCount)