class Product{
    constructor(name,price){
        this.name=name;
        this.price=price
    }

    display(){
        console.log(`Product : ${this.name}`);
        console.log(`Product : $${this.price}`);
    }
    caculator(sale){
        return this.price + (this.price*sale)
    }
}
const sale=0.05;
const product1=new Product("Iphone",19.00)
const product2=new Product("Shirt",10.00)
product1.display();

const total=product1.caculator(sale)
console.log(total)