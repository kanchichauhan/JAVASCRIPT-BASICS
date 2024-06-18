/** 
    * What is async ?
    * What is await ?
    * How async await works behind the scenes?
    * Examples of using async/await
    * Error Handling
    * Async await vs Promise.then/.catch
*/

/* this async function always returns a promise
        - but if the returned value is already a promise then it only return the actual value
        const pr = new Promise((resolve, reject) => {
            resolve('promise resolved value');
        })

        async function getData() {
            return p 
        }

        const dataPromise = getData();
        dataPromise.then(res => console.log(res));
*/

const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved value');
    }, 5000);
});
const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved value');
    }, 2000);
});

async function getData() {
    // await can only be used inside an async function
    const data1 = await pr1;
    console.log(data1); // it will wait until promise will be resolved
    console.log('work after async1');

    const data2 = await pr2;
    console.log(data2); // it will wait until promise will be resolved
    console.log('work after async2');
}
getData();
