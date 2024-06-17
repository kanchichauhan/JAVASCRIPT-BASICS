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

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved value');
    }, 3000);
});

async function getData() {
    // await can only be used inside an async function
    const data = await pr;
    console.log(data);
    console.log('work after async');
}
getData();
