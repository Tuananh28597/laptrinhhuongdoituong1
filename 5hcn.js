class hcn{
    width;
    height;
    constructor(width,height) {
        this.width=width;
        this.height=height;
    }
    getPerimeter(a,b){

        return (this.width+this.height)*2;
    }
    getArea(){
        return this.width*this.height;
    }
    drawCanvas(){
        let ctx=document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(0,0,this.width,this.height)
    }

}
let HCN =new hcn(100,200);
let perimeter = HCN.getPerimeter();
let area= HCN.getArea();
alert(perimeter)
HCN.drawCanvas()
