class A{
    xyz(){
        console.log("parent class property")
    }
}
class B extends A{
    abc(){
        console.log("child class property")
    }
}
let x = new B()
x.xyz()
x.abc()