/* Hoisting => is a phenomenon in JS by which you can access the variables and functions even before initialising/declaring it
    even before the code starts executing the memory is allocated to each and every variable and function that's why it won't give error
*/

// EXAMPLE 1

    getName();
    console.log(x);

    var x = 7;

    function getName() {
        console.log('Hoisting explained');
    }
/* expected output
Hoisting explained
undefined
*/


// EXAMPLE 2 - getName as a arrow function

    getName();
    console.log(x);

    var x = 7;

    // both the functions will behave like a variable & while memory allocation it will assign undefined here

    const getName = () => {
        console.log('Hoisting explained');
    }
    const getName = function abc () {
        console.log('Hoisting explained');
    }
/* expected output
gives error
arrow function behaves as a variable, it gives undefined to getName
*/


// EXAMPLE 3

    getName();
    console.log(x);
    
    var x = 7;
    
    function getName() {
        console.log('Hoisting explained');
    }

/* expected output
Hoisting explained
undefined
*/

// EXAMPLE 4

