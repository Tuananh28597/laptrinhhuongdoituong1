class myDate{
    day;
    month;
    year;
    constructor(day,month,year) {
        this.day=day;
        this.month=month;
        this.year=year;
    }
    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
    setDay(a){
       return  this.a=a;
    }
    setMonth(b){
        return this.b=b;
    }
    setYear(c){
        return this.c=c;
    }
}

let date1= new myDate(28,5,1997);
let day=date1.setDay(prompt("nhập ngày"));
let month=date1.setMonth(prompt("nhập tháng"))
let year=date1.setYear(prompt("nhập năm"))
alert("Bạn đã nhập vào " + day+"/"+month+"/"+year)