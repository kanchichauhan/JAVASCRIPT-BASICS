/*
    ************** PROTOTYPES ************

    In JavaScript, prototypes allow properties and methods to be shared among instances of the function or object. 

    - Add a Property to the Prototype
    - Add a Method to the Prototype

    ********** Prototype Inheritance ********

    Properties or methods added to the prototype of a constructor function are accessible to all objects
    derived from it. For example,

    ******* JavaScript Prototype Chaining *****

    JavaScript always searches for properties in the objects of the constructor
    function first. Then, it searches in the prototype.
*/

// Inheritance
function Car(model, year) {
    this.model = model;
    this.year = year;
};

// create multiple objects
let c1 = new Car("Mustang", 1964);
let c2 = new Car("Corolla", 1966);

// add property
Car.prototype.color = "Red";

// add method
Car.prototype.drive = function() {
    console.log(`Driving ${this.model}`);
};

// display added property using c1 and c2 objects
console.log(`${c1.model} color: ${c1.color}`);  
console.log(`${c2.model} color: ${c2.color}`);  

// display added method using c1 and c2 objects
c1.drive();
c2.drive();


// CHAINING

function Car1() {
    this.color = "Red";
};

// add property that already exists
Car1.prototype.color = "Blue";

// add a new property
Car1.prototype.wheels = 4;

const c3 = new Car1();

console.log(`The car's color is ${c3.color}.`); 
console.log(`The car has ${c3.wheels} wheels.`);