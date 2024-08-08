/*
Q1. when user submits the form how the request works internally??
Q2. How requests work in real time systems?

Q3. arrow functions vs normal functions?

ARROW FUNCTIONS -

    1. Shorter Syntax: Arrow functions have a more concise syntax.
        const add = (a, b) => a + b;

    2. No `this` Binding: Arrow functions do not have their own this context;
        they inherit this from the surrounding lexical context.

    3. No arguments Object: Arrow functions do not have their own arguments object;
        you must use rest parameters or another way to handle variable numbers of arguments.

        const sum = (...args) => args.reduce((a, b) => a + b, 0);

    4. Cannot be used as constructors: Arrow functions cannot be used with the new keyword.
        
        const Person = (name) => { this.name = name; };
        const p = new Person('Alice');

    When to Use:

    - In Callbacks: Arrow functions are great for short, one-liner functions like those used in map, filter, or reduce.
    - Inside Methods: When you need to preserve the this context from the enclosing scope, such as inside a class method that uses callbacks.
    - For Simple Functions: When you don’t need a function to have its own this, arguments, or be used as a constructor.

REGULAR FUNCTIONS -

    1. Standard Syntax: Regular functions have a more verbose syntax.

        // Regular function
        function add(a, b) {
            return a + b;
        }

    2. Own this Binding: Regular functions have their own this context,
        which can be changed with call, apply, or bind.

        function show() {
            console.log(this);
        }

    3. Has arguments Object: Regular functions have their own arguments object,
        which is an array-like object representing the arguments passed to the function.

        function sum() {
            console.log(arguments);
        }
        sum(1, 2, 3); // logs: [1, 2, 3]

    4. Can be used as Constructors: Regular functions can be used as constructors with the new keyword.

        function Person(name) {
            this.name = name;
        }

    When to Use:

    - When Using Methods: In methods that need their own this context.
    - For Constructors: When creating objects with the new keyword.
    - When Accessing arguments: When you need to work with the arguments object.
    - For More Complex Logic: When the function is more complex and may benefit from having its own this or arguments.


Q4. How to stop hoisting in our programs? // using "use strict"
*/