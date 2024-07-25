// JSON is coming as a response now we need to sort the array of objects alphabetically using map function

/*
INPUT: [{name: 'kanchi'}, {name: 'akansha'}]
OUTPUT: [{name: 'akansha'}, {name: 'kanchi'}]
*/

const jsonResult = [
    {name: 'kanchi'},
    {name: 'akansha'}
];

const sortArr = jsonResult
                    .map((item) => (item.name))
                    .sort()
                    .map((eachSortedItem) => ({name: eachSortedItem}));

console.log(sortArr)