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
