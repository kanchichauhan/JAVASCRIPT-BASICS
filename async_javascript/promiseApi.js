/* parallel API calls 
    Promise.all([p1, p2, p3])
    Promise.allSettled([p1, p2, p3])
    Promise.race([p1, p2, p3])
    Promise.any([p1, p2, p3])

    Settled => got the result either rejected or resolved
    Fulfilled/Success => the promise is successfully fulfilled
    Aggregate error => when all the errors has been rejected it will return the array of errors
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