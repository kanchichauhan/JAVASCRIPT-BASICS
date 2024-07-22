/* parallel API calls 
    Promise.all([p1, p2, p3]) - waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
    Promise.allSettled([p1, p2, p3]) -  waits for all promises to settle and returns their results as an array of objects with:
    Promise.race([p1, p2, p3]) -  waits only for the first settled promise and gets its result (or error).
    Promise.any([p1, p2, p3]) -  waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.

    Settled => got the result either rejected or resolved
    Fulfilled/Success => the promise is successfully fulfilled
    Aggregate error => when all the promises has been rejected it will return the array of errors
*/

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject('P1 fail'), 1000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P2 success'), 2000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P3 success'), 1000)
})

// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res);
// }).catch((err) => {console.error(err)})
/* OUTPUT =>  P1 fail */


// Promise.allSettled([p1, p2, p3]).then(res => {
//     console.log(res);
// }).catch((err) => {console.error(err)})
/* OUTPUT =>  [
    { status: 'rejected', reason: 'P1 fail' },
    { status: 'fulfilled', value: 'P2 success' },
    { status: 'fulfilled', value: 'P3 success' }
] */

// Promise.race([p1, p2, p3]).then(res => {
//     console.log(res);
// }).catch((err) => {console.error(err)})
/* OUTPUT => P1 fail */

Promise.any([p1, p2, p3]).then(res => {
    console.log(res);
}).catch((err) => {
    console.log.errors(err) //to get the aggregate error in a form of an error
})
/* OUTPUT => P3 success */