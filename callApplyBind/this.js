/*
    WHAT IS THIS??????????
    In JavaScript, the this keyword refers to an object.

    The this keyword refers to different objects depending on how it is used:

    1. In an object method, this refers to the object.
    2. Alone, this refers to the global object.
    3. In a function, this refers to the global object.
    4. In a function, in strict mode, this is undefined.
    5. In an event, this refers to the element that received the event.
    6. Methods like call(), apply(), and bind() can refer this to any object.

CALL =>  an object can use a method belonging to another object.
    const person = {
        fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "live in city" + city + "and" + country;
        }
    }
    const person1 = {
        firstName:"John",
        lastName: "Doe"
    }
    const person2 = {
        firstName:"Mary",
        lastName: "Doe"
    }

    // This will return "John Doe":
    person.fullName.call(person1, 'agra', 'india');

APPLY => same as call, method takes arguments as an array.

    const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
    }

    const person1 = {
        firstName:"John",
        lastName: "Doe"
    }

    person.fullName.apply(person1, ["Oslo", "Norway"]);

BIND (Function Borrowing) => an object can borrow a method from another object
1. You can create a reusable function (returningFn) with a fixed this context (person1 in this case)
    without immediately invoking it.
2. Useful when you want to create a function that you can call later with a predefined context.


    const person = {
        firstName:"John",
        lastName: "Doe",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }

    const member = {
        firstName:"Hege",
        lastName: "Nilsen",
    }

    let fullName = person.fullName.bind(member);


Use bind:

When you want to create a new function with a specific this context and potentially pre-set arguments.
When you want to pass around a function with a bound context for later invocation.

Use call or apply:

When you need to immediately invoke a function with a specific this context and arguments that are already
available in separate values (call) or an array (apply).

*/



/*
non-strict mode - if you dont have a bf then it will return window object
strict mode - if you have a bf then well and good, otherwise it will return undefined
in global scope, both will return window object
*/

// global

console.log(this); // window object

// called from a function

function gfFunction() {
    console.log(this);
}

// both are same
gfFunction(); //will point to crush (window) bcz its alone
window.gfFunction(); // if bf is present take bf's name
// in this case it will return window object


// called wrt to BF

let bfObject = {
    name: 'kanchi',
    age: 21,
    gfFunction: function () {
        console.log(this); // bfObject
    }
}

bfObject.gfFunction(); // this will point to the bfObject

const gfRefFunction = bfObject.gfFunction;
gfRefFunction(); // it doesn't have its bf with her so it will point crush(window)


// Call, apply, bind

// you can change your bf using call, apply

// multiple boyfriends


let bf1Object = {
    name: 'Rahul',
    age: 12,
    gfFunction: function (a, b) {
        console.log(this); //bf1Object
    }
}
let bf2Object = {
    name: 'Amit',
    age: 15,
    gfFunction: function () {
        console.log(this); bf2Object
    }
}

bf1Object.gfFunction(1, 2) // clearly she is with her first bf then she will assign first bf to this

bf1Object.gfFunction.call(bf2Object, 1, 2); // call methood allowed to have a second boyfriend so in that case now her boyfriend is bf2Object
// Apply is syntactical sugar over call, so this method passes other args in an array
bf1Object.gfFunction.apply(bf2Object, [1, 2]); // apply methood allowed to have a second boyfriend so in that case now her boyfriend is bf2Object


//  THIS IS OBVIOUSLY NOT GOOD SO pARENTS DECIDED TO MARRY THEIR
// DAUGHTER WITH ONE OF THEM ALONG WITH SHE WILL ALWAYS TALKS ABOUT HIS HUSBAND,
// NO MATTER HOW MANY BF'S SHE IS WITH

const wifeFunction = bf1Object.gfFunction.bind(bf1Object) // she could marry any object(bf's)
wifeFunction(); // now it will not return undefined or crush (window) 
// she will return husband's name(bf1Object)


/*-------------AAADDVVAAANNNCEEEE LEEEEVEEELLLL-------------------*/

// when this is present inside async method/callback

// 1. all the async/callbacks get executed wrt global object, no matter if you have bf or not

const obj1 = {
    value: 42,
    regularMethod: function() {
        // this > obj
        setTimeout(function() {
            console.log(this); // window/undefined - since all the callbacks get executed wrt global object
        }, 1000)
    }
}

obj1.regularMethod(); 

// using arrow function inside async method/callback

// 2. arrow function assign this to its object at the time of creation

const obj2 = {
    value: 42,
    regularMethod: function() {
        // this > obj
        setTimeout(() => {
            console.log(this); // point to boyfriend - will get the child marriage done
        }, 2000)
    }
}

obj2.regularMethod(); 