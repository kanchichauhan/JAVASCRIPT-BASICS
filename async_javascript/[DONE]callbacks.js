// CALLBACK - A callback is a function passed as an argument to another function
//       & a callback function can run after another function has finished

// Sometimes you would like to have better control over when to execute a function.
// Suppose you want to do a calculation, and then display the result.

// Examples of callbacks are => 1. addEventListener, setTimeout, setInterval

function displayResult (result) {
    console.log(result)
};
function sumRes (num1, num2, func) {
    func(num1+num2)
}
function minusRes (num1, num2, func) {
    func(num1-num2)
}
sumRes(5, 2, displayResult);
minusRes(5, 2, displayResult);

// Example2

function waitFn(num, cb) {
    setTimeout(() => {
        cb(num*num);
    })
}
waitFn(2, (res) => {
    console.log(res);
    waitFn(res, (res2) => {
        console.log(res2);
        waitFn(res2, (res3) => {
            console.log(res3);
        })
    })
})
/*----------------------- DISADVANTAGES ---------------------------------*/

/**************** ❌ CALLBACK HELL/ PYRAMID OF DOOM *******************/

/*
    Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
    Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects
    the readability and maintainability of the code. 
*/
const cart = ['shoes', 'pants', 'kurta'];
// create order
// payment
// order summary
// update wallet


api.createOrder(cart, function () {
    api.proceedPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        });
    });
})


/****************** ❌ INVERSION OF CONTROL *****************/

api.createOrder(cart, function () {
    api.proceedPayment() // we gave control of running this api to createOrderApi/ there could be a bug in createOrderAPI/any other problem, 
})
