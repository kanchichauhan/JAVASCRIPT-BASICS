/*
    ************** PROTOTYPES ************

    Inheritance and the prototype chain

    In programming, inheritance refers to passing down characteristics from a parent to a child
    so that a new piece of code can reuse and build upon the features of an existing one.

    JavaScript implements inheritance by using objects. Each object has an internal link to another
    object called its prototype. That prototype object has a prototype of its own, and so on until
    an object is reached with null as its prototype.

    By definition, null has no prototype and acts as the final link in this prototype chain.
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

/*
The difference between `__proto__` and `prototype` is simple: `__proto__` is
a property of an object instance, while `prototype` is a property of a constructor function.
When you use `__proto__`, you're looking up properties and methods on an object's
prototype chain. On the other hand, `prototype` defines the shared properties and methods
that all instances created from a constructor function will have.
*/