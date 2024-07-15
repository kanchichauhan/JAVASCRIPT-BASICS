/*
Variables declared with var can be reassigned. Variables
declared with let can be reassigned. Variables declared with const
cannot be reassigned. Variables declared with var are hoisted, which
means they can be accessed before they are declared.
*/

// A temporal dead zone (TDZ) 
//  is the block where a variable is inaccessible until the moment the computer initializes it with a value.

console.log(age1); // ReferenceError: Cannot access 'age1' before initialization
const age1 = 20;
console.log(age1); // 20

console.log(age2); // ReferenceError: Cannot access 'age2' before initialization
let age2 = 20;
console.log(age2); // 20

/* Variables declared with const are hoisted to the top of their scope like let, but unlike var, they are not initialized with undefined. Instead, they remain uninitialized until their declaration statement is executed.
Accessing a const variable before its declaration statement reaches in the code will throw a ReferenceError. */

console.log(age3); // undefined
let age3 = 20;
console.log(age3); // 20

/*Variables declared with var are also hoisted to the top of their scope,
but they are initialized with undefined by default. This means you can access a var variable before its
actual declaration in the code, although its value will be undefined until it is assigned.*/