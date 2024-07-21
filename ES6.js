//  LAAATEEST ECMAA SCRIPTT 2023(ES13)

/*
1. toSorted - The toSorted() method is like sort(), but it returns a new sorted array, 
            leaving the original array unchanged.
2. toReversed - reverse the elements of array and returns new array
3. with - The with() method allows modifying a single element based on its index and
            returning a new array.
4. findLast -  method returns the value of the last element that passes a test.
5. findLastIndex -  returns the index (position) of the last element that passes a test.
6. toSpliced - method adds and/or removes array elements, returns new array
*/

// 1. toSorted
let arr = [3, 1, 2];
let sortedArr = arr.toSorted();
console.log(sortedArr);  // Output: [1, 2, 3]
console.log(arr);

//2. toReversed

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = fruits.toReversed();

// 3. with

let arr2 = ['apple', 'banana', 'cherry'];
let newArr2 = arr2.with(1, 'blueberry');
console.log(newArr2);  // Output: ['apple', 'blueberry', 'cherry']
console.log(arr2);

// 4. findLast

const numbers = [10, 42, 53, 12, 200, 66, 33, 6, 10000, 200, 10];

numbers.findLast((value, index) => {
    if (value > 100) {
        console.log(value); // 200, 10000, 200
    }
});

// 5. findLastIndex

const num1 = [10, 42, 53, 12, 200, 66, 33, 6, 10000, 200, 10];

let num2 =  num1.findLastIndex((value, index) => value > 100);
console.log(num2)

// 6. toSpliced

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
const fruitss2 = fruits.toSpliced(2, 0, "Lemon", "Kiwi");
console.log(fruitss2)



// *****************  2009 - ES5 (first major revision to javascript)  ***************** //

"use strict"

// trim(), isArray, forEach, map, reduce, filter, some, indexOf, JSON.parse(), Object.keys, Object.create




// *****************  2015 - ES6 (second major revision to javascript)  ***************** //

// let, const, arrow functions, promises, array destructuring, object destructuring, String.includes(), spread operator