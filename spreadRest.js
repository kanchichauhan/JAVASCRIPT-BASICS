// SPREAD OPERATOR & REST OPERATOR - Denoted by three consecutive dots (…)
//  SPREAD OPERATOR
    /*  USAGE - used to expand the iterable into an individual element [...arr]
        Parameter Position - can be used anywhere in an array literal or function call
        Return value - creates a new array with copied elements
        use cases - concatinating aggregateQuerySnapshotEqual, passing arrays as arguments
    */
//  REST OPERATOR
    /*  USAGE - used in function parameters to gather arguments
        Parameter Position - must be the last parameter in function parameter list
        Return value - gathers remaining arguments into an array
        use cases - Capturing an arbitrary number of function arguments
    */


const arr1 = [1,2,3,4,5,6];
const arr2 = [12,34,45,56,34];

function checkParam(arr1, arr2, ...args) {
    return [...arr1, ...arr2, ...args]
}

const arrMerge = checkParam(arr1, arr2);
console.log(arrMerge);
