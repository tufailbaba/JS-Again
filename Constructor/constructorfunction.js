function Person ( name,age){
    this.name = name
    this.age = age
}
function Car (make, model){
    this.make = make
    this.model = model
}

let myCar = new Car ("Toyota", "camry");
// console.log(myCar);

let myNewcar = new Car ("Tata" , "Safari")
// console.log(myNewcar);

function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea (" Lemon tea")
console.log(lemonTea.describe());

function Animal (species){
    this.species =species
}
Animal.prototype.sound = function(){
    return `${this.species} make a sound`
} 

let Cat  = new Animal("Cat");
console.log(Cat.sound());

