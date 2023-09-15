class RailwayR
{
    bookticket(name1,phone,des){
        this.name1=name1
        this.phone = phone
        this.des=des
    }
    display(){
        alert("your name is"+this.name1+"your phone number is"+this.phone+"your destination is"+this.des)
    }
    cancel(){
        alert("your ticket is cancelled"+this.name1)
    }
}
let a = new RailwayR()
var n = prompt("enter your name")
var p = Number(prompt("enter the phone number"))
var d = prompt("enter your destination")
a.bookticket(n,p,d)
a.display()
a.cancel()