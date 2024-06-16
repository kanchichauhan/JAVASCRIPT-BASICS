/* 
    HOD = takes one or more functions as an arguments, or returns a function as its result
    1. every component of a function has its own task to do, not redundant
    2. resability, modularity
    3. calculate is a HOF
    4. area, diameter is a callback function

    WHY USE HIGHER ORDER FUNCTION ???
    1. improve the legitibility of our code by making it more concise and easy to understand.
    2. organise our code into smaller chunks and making it more legible and easier to debug
    3. this can help speed up the development process and make it easier to debug code
    MAP: when we need to transform an array
    FILTER: when we need to select subset of data from an array
    REDUCE" when you want to return a single value as a result
*/

const radius = [3, 1, 2, 4];

const area = (radius) => {
    return Math.PI * radius * radius
};
const diameter = (radius) => {
    return radius * radius
};
// passing function as arguments
const calculate = (radiusArr, area) => {  
    const output = [];
    radiusArr.forEach(eachRadius => {
        output.push(area(eachRadius));
    });
    return output;
};
// const calculate = (radiusArr, area) => {  
//     const output = radiusArr.map(area);
//     return output;
// }

console.log('AREA => ', calculate(radius, area));
console.log('DIAMETER =>', calculate(radius, diameter));





// Q1:  MERGE DIFFERENT OBJECTS USING REDUCE

const obj1 = {a: 1, b: 1};
const obj2 = {c: 2, d: 2};
const obj3 = {e: 3, f: 3};

const mergeObj = [obj1, obj2, obj3].reduce((acc, curr) => {
    return { ...acc, ...curr };
}, {});

console.log('MERGE OBJECT', mergeObj)


// Q2: 

// INPUT

const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

// OUTPUT

const output = {
    'Apple': [
        { name: 'Apple', price: 1.99, quantity: 3 },
        { name: 'Apple', price: 1.99, quantity: 3 }
    ],
    'Xiomi': [ { name: 'Xiomi', price: 2.99, quantity: 2 } ],
    'Samsung': [ { name: 'Samsung', price: 3.99, quantity: 1 } ],
    'Tesla': [
        { name: 'Tesla', price: 3.99, quantity: 1 },
        { name: 'Tesla', price: 4.99, quantity: 4 }
    ],
    'Nokia': [ { name: 'Nokia', price: 4.99, quantity: 4 } ]
    }


const finalRes = shoppingCart.reduce((acc, curr) => {
    const {name} = curr
    console.log(acc, name);
    if (acc[name] == null) {
        acc[name] = [];
    }
    acc[name].push(curr)
    return acc;
}, {});

console.log(finalRes)