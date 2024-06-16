/*  Initially promise is empty{data: empty}
    const promise = createOrder(cart);

    once it will get the data after some async duration of time {data: orderDetails}
    Promise object will call callback function then

    promise.then(function (orderId) {
        proceedToPayment(orderId)
    })

    USER: Promise
            [[Prototype]]: Promise
            [[PromiseState]]: Pending, Fulfilled, Rejected
            [[Promise Result]]: undefined

    ADVANTAGE OF PROMISE OVER CALLBACKS

    1. Promises solves the main problem of callback hell by providing chaining.
    2. This makes code more readable and clean.
    3. Error handling is improved with the help of promises as we can use .catch() for error handling in promises.
*/
const PIZZA_API = 'https://jsonplaceholder.typicode.com/users/1';

const user = fetch(PIZZA_API);
user.then((data) => data.json()) // once will get the data a promise object is going to be returned
.then((data) => console.log(data)); // Here, you can see that the body property contains a ReadableStream. To use the ReadableStream in our JavaScript application, we need to convert it to call the json() method


/* What is a promise?
    The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/

// PROMISE CHAININGG / CALLBACK HELL SOLUTION

// createOrder(cart)
// .then((orderId) => proceedToPayment(orderId))
// .then((paymentInfo) => showOrderSummary(paymentInfo))
// .then((updateValue) => updateWlaletBal(updateValue));





/*
Q1 => What is a promise?
Q2 => Why use Promise?
*/