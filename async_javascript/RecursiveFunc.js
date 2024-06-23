/*  RECURSIVE FUNCTION - Recursion is a programming technique where a function calls itself repeatedly to solve a problem.

    JavaScript does have a recursion limit.
    The recursion limit prevents errors caused by too many nested function calls.
    However, the limit varies depending on the JavaScript engine and the environment in which the code is running.

    1. The function definition.
    2. The base condition.
    3. The recursive call.

    function recursiveFunc() {
        if(base condition) {
            // stops recursion if condition is met
        }
        // else recursion continues
        recurse();
    }

    The call stack has a limit.
    And since a recursive function without a base condition will run infinitely, it exceeds the call stack's limit.
*/

// Q1 - we have an array of numbers so each of them should be print one after another in the 1sec delay timing

const array = [12, 23, 34, 45, 54];

let arrIndex = 0;

const arrFn = (arrIndex) => {
    if (arrIndex >= array.length) {
        return
    }

    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(array[arrIndex]);
        }, 1000);
    });

    pr.then((value) => {
        console.log(value);
        arrFn(arrIndex+1)
    })
};

arrFn(arrIndex);

// Q2 - we have 10 with us, now we have to print the numbers from 10 to 1

const printNumber = (num) => {
    if (num < 1) return

    console.log(num);
    printNumber(num-1);
};

printNumber(10)
