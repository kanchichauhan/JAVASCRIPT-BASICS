/*
    The JavaScript ES6 has introduced two new data structures,
    i.e Map and WeakMap.

    Map is similar to objects in JavaScript that allows us to store elements in a key/value pair.
    The WeakMap is similar to a Map. However, WeakMap can only contain objects as keys. For example,

    The elements in a Map are inserted in an insertion order. However, unlike an object,
    a map can contain objects, functions and other data types as key.
*/

// create a Map
const map1 = new Map(); // an empty map
console.log(map1); // Map {}

// insert key-value pair
map1.set('info', {name: 'Jack', age: 26});
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}

// You can also use objects or functions as keys. For example,
let obj = {};
map1.set(obj, {name: 'Jack', age: "26"});

console.log(map1); // Map {{} => {name: "Jack", age: "26"}}

// You can access Map elements using the get() method. For example,
map1.set('info', {name: 'Jack', age: "26"});

// access the elements of a Map
console.log(map1.get('info')); // {name: "Jack", age: "26"}

// You can use the has() method to check if the element is in a Map. For example,
map1.set('info', {name: 'Jack', age: "26"});

// check if an element is in Set
console.log(map1.has('info')); // true



// ************* Set and WeakSet ************** //

/*
    Set is similar to an array that allows us to store multiple items like numbers, strings, objects, etc.
    However, unlike an array, a set cannot contain duplicate values.
*/

// create Set
const set1 = new Set(); // an empty set
console.log(set1); // Set {}

// Set with multiple types of value
const set2 = new Set([1, 'hello', {count : true}]);
console.log(set2); // Set {1, "hello", {count: true}}

//  Access Set Elements

console.log(set2.values());

// add new elements

set2.add([3,4,5])
console.log(set2.values());

// delete an element
set2.delete(2);
console.log(set2.values()); 

//  ************** WEAK SET ************** //

/*
    The WeakSet is similar to a Set. However, WeakSet can only contain objects whereas a Set can
    contain any data types such as strings, numbers, objects, etc. For example,
*/