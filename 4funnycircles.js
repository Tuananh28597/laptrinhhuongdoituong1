class veHinh{
    x;
    y;
    radius;
    constructor(x,y,radius) {
        this.x=x;
        this.y=y;
        this.radius=radius;
    }
    drawCanvas(){
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        this.x=Math.random()*window.innerWidth;
        this.y=Math.random()*window.innerHeight;
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fillStyle="red";
        ctx.fill();
    }
}
let vehinh = new veHinh(100,100,100)

for (let i = 0; i < 5; i++) {
    vehinh.drawCanvas()
}






