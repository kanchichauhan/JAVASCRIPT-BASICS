const arr = [23,45, 1,34,56,100, 67,78,90,34,23];

let max=arr[0];
let min=arr[0];

arr.forEach((eachItem) => {
    if (eachItem < min) min = eachItem
    if (eachItem > max) max = eachItem
});

console.log(min, max)