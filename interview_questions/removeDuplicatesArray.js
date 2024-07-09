const dupArr = ['s', 't', 'y', 't', 'y', 'y', 'w', 'a'];
const addUniqueItems = [];
const removeDup = [];

dupArr.forEach((eachItem) => {
    if (addUniqueItems.indexOf(eachItem) === -1) {
        addUniqueItems.push(eachItem);
    }
})

console.log(addUniqueItems) // [ 's', 't', 'y', 'w', 'a' ]

dupArr.forEach((eachItem, index) => {
    let findDup = true;
    for (i = 1; i < dupArr.length; i++) {
        if (eachItem === dupArr[i] && index !== i)  {
            findDup = false;
        }
    }
    if (findDup) removeDup.push(eachItem);
});
console.log(removeDup)
// [ 's', 'w', 'a' ]