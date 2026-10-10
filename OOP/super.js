class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`)
    }
}
class Rabbit extends Animal{
    constructor(name,age,run){
        super(name,age)
       
        this.run=run;
    }
    runHello(){
        console.log(`This ${this.name} can run`);
        super.move(this.run);
    }
}
class Fish extends Animal{
    constructor(name,age,swim){
        super(name,age);
        
        this.swim=swim;
    }
}
const rabbit=new Rabbit("rabbit",1,24);
const fish=new Fish("fish",2,10);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.run)

rabbit.runHello()