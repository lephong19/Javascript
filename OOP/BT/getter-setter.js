class Main{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth;
        }else{
            console.error("width must be a positive number")
        }
    }

       set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;
        }else{
            console.error("Height must be a positive number")
        }
    }
    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }
    get area(){
        return (this._width*this._height).toFixed(1);
    }
}
const main=new Main(3,4);
console.log(main.width);
console.log(main.height); 
console.log(main.area);