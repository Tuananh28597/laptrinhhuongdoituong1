class Rectangle{
    //thuoc tinh
    width;
    height;

    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    //phuongthuc
    getArea(){
        return this.width*this.height;
    }
    getPerimeter(){
        return (this.width+this.height)*2;
    }
    //ve canvas

    drawCanvas(){
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle="##"
    }


}
let bang1 = new Rectangle(300,100);
let giaykhen1 = new Rectangle(30,20);
// bang1.getArea()
// giaykhen1.getPerimeter()