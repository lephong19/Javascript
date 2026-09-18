const user = {
    name: "Phong",

    sayHello: function() {
        console.log(this.name);
    }
};
// this=user
user.sayHello();