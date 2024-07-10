// using Hashmap function

const arr = [1,3,4,5,2,1,3,5,6,8,8,6,23,12,12];

const obj = {};
const dupArr = [];

arr.forEach((eachItem) => {
    if (obj[eachItem] && !dupArr.includes(eachItem)) {
        dupArr.push(eachItem)
    } else {
        obj[eachItem] = true
    }
});
console.log(dupArr)