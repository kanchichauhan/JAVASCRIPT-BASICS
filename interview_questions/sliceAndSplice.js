// slice array =>  Using slice() to create a new array containing elements from index 1 to 3 (exclusive)
// splice array => The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method modifies the original array and returns an array containing the deleted elements
// array.splice(start, deleteCount, item1, item2, ...)


const arr = [1,3,4,2,3,4,5,2];

const slicedArr = arr.slice(0,3); // [1, 3, 4]
console.log(slicedArr)

const spliceArr = arr.splice(2, 2, 'kanchi', 'chauhan')
console.log(arr)
