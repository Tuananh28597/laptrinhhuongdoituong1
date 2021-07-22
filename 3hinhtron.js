class hinhTron{
    radius;

    constructor(radius) {
        this.radius=radius;
    }
    getArea(){
        return this.radius*this.radius*Math.PI
    }
}
let radius=new hinhTron(30);
let Area=radius.getArea()

alert("diện tích hình tròn là "+Area)