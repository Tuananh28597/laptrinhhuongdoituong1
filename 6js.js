class Temperature{
    doC;
    constructor(doC) {
        this.doC=doC;
    }
    getdoF(){
        return this.doC*1.8+32;
    }
    getdoK(){
        return this.doC+273.15;
    }
}
let doC=new Temperature(20);
let doF=doC.getdoF()
let doK=doC.getdoK()
alert("độ F là : " + doF  +  " độ K là : " + doK )