
//dom element
let showCase = document.getElementById('showCase');

//style the showCase element
showCase.setAttribute("style","color:green; text-align:center; font-size:40px; font-weight:bold;");

//create a class 
class Car {
    constructor(name) {
        this.name = name;
    }
    showOutput(){
        return `I have a ${this.name}`;
    }
}
// Create a subclass(child class)and extend Car class
class Brand extends Car{
       constructor(name,brand) {
        super(name);
        this.brand = brand;
        
    }
    // Here concating both class
       showOutput1(){
        return this.showOutput() + " , it is a "+ this.brand; 
    }
};
let detail = new Brand("Ford","Mustang .");
showCase.innerHTML=detail.showOutput1();
