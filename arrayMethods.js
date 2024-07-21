// splice = method adds and/or removes array elements.
    // Create an Array
    const spliceFruit = ["Banana", "Orange", "Apple", "Mango"];

    // At position 2, remove 2 items
    spliceFruit.splice(2, 2);
    console.log('remove values: ', spliceFruit)
    // At position 2, add "Lemon" and "Kiwi":
    spliceFruit.splice(2, 0, "Lemon", "Kiwi");
    console.log('addNewValues: ', spliceFruit)

// slice - method returns selected elements in an array, as a new array.

    const sliceFruit = ["Banana", "Orange", "Apple", "Mango"];
    const citrus = sliceFruit.slice(1, 3);
    console.log('sliced Array : ', citrus);

// join = does not change the original array, returns an array as a string

const fruits = ['orange', 'mango', 'banana', 'apple'];
const fruitsText = fruits.join(' and ');

console.log('join method: ', fruitsText);

// isArray = method returns true if an object is an array, otherwise false.

const cars = ['maruti', 'volkswagen', 'mahindra', ['audi', 'mercedes']];
const flattenArr = [];
function flattenArray(cars) {
    cars.forEach((eachCar) => {
        if (Array.isArray(eachCar)) {
            flattenArray(eachCar);
        } else {
            flattenArr.push(eachCar)
        }
    });
}
flattenArray(cars)
console.log('isArray method: ', flattenArr);

// every =  method returns true if the function returns true for all elements, otherwise false

const evenNum = [2,4,6,8,10];
const checkEven = evenNum.every((eachNum) => eachNum%2 === 0)
console.log(checkEven);

// map, filter, reduce, push, pop, toString

// find = method returns the value of the first element that passes a test.

const arr = [1,3,2,1,4,5,2];
const passedValue = arr.find((eachVal) => eachVal > 4);
console.log(passedValue)

// indexOf = method returns the first index (position) of a specified value

const getIndex = arr.indexOf(1)
console.log(getIndex)

// toString = converts an array to a string of (comma separated) array values.

const getString = arr.toString();
console.log(getString)

// sort = sort the array of strings

const sortArrayStrings = ['kanchi', 'pranshul', 'nitin', 'manish', 'akansha']

const sortString = sortArrayStrings.sort();
console.log('sorted string', sortArrayStrings);

const points = [40, 100, 1, 5, 25, 10];
const sortedAscPoints = points.sort((a, b) => a-b)
console.log('Ascending order: ', sortedAscPoints) // ascending order

const sortedDescPoints = points.sort((a, b) => b-a)
console.log('Descending order: ', sortedDescPoints)

// toReversed = method as a safe way to reverse an array without altering the original array

const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
console.log(reversed)

// split = split the string and returns an array

const string = 'reverse string';
const splitArr = string.split('')
console.log('split array: ', splitArr.toReversed().join(''));