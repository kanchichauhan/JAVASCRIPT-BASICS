// Recursion is a programming technique where a function calls itself repeatedly to solve a problem.

// FACTORIAl

function calcFactorial(num) {
    if (num > 1) {
        return num * calcFactorial(num-1)
    } else {
        return 1
    }
}
console.log(calcFactorial(3));

// Flatten array => 
    
// using recursion

const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

function flattenArr(data) {
    const arr = [];
    data.forEach(element => {
        if (Array.isArray(element)) {
            flattenArr(element)
        } else {
            arr.push(element)
        }
    });
}

flattenArr(data);

// using reduce and recursion

function flattenArr(data) {
    data.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flattenArr(curr) : curr), [])
}

flattenArr(data);



/******************** CONSTRUCTORS **********************/

//In JavaScript, a constructor function is used to create and initialize objects.

// constructor function - Example 1
function Person () {
    this.name = "John",
    this.age = 23
}

// create an object
const person = new Person();

// print object attributes
console.log(person.name);
console.log(person.age);

// Output:
// John
// 23

// constructor function - Example 2

// constructor function with parameters
function Person1 (person_name, person_age, person_gender) {

    // assign parameter values to the calling object
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function () {
        return (`Hi ${this.name}`);
    }
}

// create objects and pass arguments
const person1 = new Person1("John", 23, "male");
const person2 = new Person1("Sam", 25, "female");

 // access properties
 console.log(person1.name); // John
 console.log(person2.name); // Sam