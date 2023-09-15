class Bank{
    constructor(name1,phone,adhar,bal,pin){
        this.name1=name1
        this.phone=phone
        this.adhar=adhar
        this.bal=bal
        this.pin=pin

    }
    display(){
        var p =Number(prompt("enter your pin"))
        if(this.pin==pin){
            alert("your name is"+this.name1+"your balance is "+this.bal)
        }
        else{
            alert("incorrect pin")
        }
    }
    deposite(){
        var p =Number(prompt("enter your pin"))
        if(this.pin==pin){
            var a = Number(prompt("enter your amount"))
            alert("your previous amount is"+this.bal)
            this.bal=this.bal+a
            alert("your current amount is"+this.bal)
        }
        else{
            alert("incorrect pin")
        }

    }
    withdraw(){
        var p =Number(prompt("enter your pin"))
        if(this.pin==pin){
            var a = Number(prompt("enter your amount"))
            if(a<=this.bal){
                alert("your previous amount is"+this.bal")
                this.bal=this.bal-a
                alert("your current amount is"+this.bal)
            }
            else{
                alert("insufficient balance")
            }
        }
        else{
            alert("incorrect pin")
        }

    }
    alert("welcome to bank")

