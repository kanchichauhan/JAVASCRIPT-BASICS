// Composition - Function composition is the pointwise application of one function to the result of another.
 // Developers do it in a manual manner every day when they nest functions
// lets say I want to perform 2 tasks one after another

function add(a, b) {
    return a+b;
}

function square(val) {
    return val * val;
}

function multiply(...args) {
    return args.reduce((a, b) => a*b)
}

function addTwoAndSquare(a, b) {
    return square(add(a, b));
}

console.log(addTwoAndSquare(2, 3));

// what if you have more than 2 functions that need to be run in sequence
//  solution is composition - function that composes all functions

// function composeTwoFunction(fn1, fn2) {
//     return function (a, b) {
//         return fn2(fn1(a, b))
//     }
// }

// modernjs
const composeTwoFunction = (fn1, fn2) => (a, b) => fn2(fn1(a, b))

const task = composeTwoFunction(multiply, square)

console.log(task(2, 3))

// Multiple Functions

function composeMultiple(...fns) {
    return function(...values) {
        // reverse iterate
        fns.reduceRight((a, b) => b(a), values);
    }
}

const composeAll = (...fns) => (...val) => fns.reduce((a, b) => b(a), val)

const task1 = composeAll(multiply, square)

console.log(task1(5, 3))