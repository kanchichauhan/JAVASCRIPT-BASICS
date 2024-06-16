// CALLBACK - A callback is a function passed as an argument to another function & a callback function can run after another function has finished

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

/*----------------------- DISADVANTAGES ---------------------------------*/

/**************** ❌ CALLBACK HELL/ PYRAMID OF DOOM *******************/
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
