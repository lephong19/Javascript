function createCounter(count){
   let i=count
    function get(){
        return count
    }
    function increment(){
        count++;
    }
    function decrement(){
        count--
    }
    function reset(){
        count=i
    }
    return{
        get , increment,decrement,reset
    }
}
const counter=createCounter(10)
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.get()); // 11

counter.reset();

console.log(counter.get()); // 10