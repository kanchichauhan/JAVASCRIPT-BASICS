// create a promise
        const cart = ['SHOES', 'PANTS', 'KURTA'];

        // PROMISE HELL //
        createOrder(cart)
            .then(function (orderId) {
                console.log(orderId)
            })
            /* => if i will put the catch after first check then it oncly check the first one
            & will not block the execution of other promises :)
            .catch(function (err) { // will handle any error in the chain
                console.log(err.message);
            })
            */
            .then(function (orderId) {
                return proceedToPayment(orderId)
            })
            .then(function (paymentInfo) {
                console.log(paymentInfo);
            })
            .catch(function (err) { // will handle any error in the chain
                console.log(err.message);
            })
        //****//


        function createOrder(cart) {
            const promise = new Promise(function(resolve, reject) {
            // createOrder
            // validateCart
            // order Id
            if (!validateCart(cart)) {
                const err = new Error('cart is not valid');
                reject(err);
            }
            const orderId = '12345';
            if (orderId) {
                setTimeout(function () {
                    resolve(orderId);
                }, 5000);
            }
            });
            return promise;
        }

        function proceedToPayment(orderId) {
            return new Promise((resolve, reject) => {
                resolve('payment successful')
            })
        }

        function validateCart(cart) {
            return false;
        }
/* my own interview question */
    console.log('A');
    const delay = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('B')
        }, 5000);
    })
    delay.then((result) => {
        console.log(result)
        console.log('C');
    })
    .catch((err) => { //if the promise is rejected
        console.log(err.message);
    });


    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            rej('resolved')
        }, 2000)
    });
    promise.then((res) => console.log(res))
    .then(() => console.log('everything done1'))
    .then(() => console.log('everything done2'))
    .catch((err) => console.log('reject', err))
    // method with promises. The finally() method gets executed when the promise is either resolved successfully or rejected. For example,
    .finally(       
        function greet() {
            console.log('This code is executed.');
        }
    );