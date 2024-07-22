/* BASIC CLOSURE SYNTAX
    - function along with its lexical scope forma a closure
    a function that has access to the variables in its parent scope, even after the parent function has completed execution.
    This allows for data to be "closed over" or remembered by the inner function, even after the outer function has returned.
*/

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();


// we can return function as well

function x() {
    let a = 7;
    function y() {
        console.log(a);
    }
    a=100
    return y;
}
a=200
var z = x(); // now x is gone from the execution context
/* now as y is outside of scope how it will access 'a' */
// z() // returning y function, now still it returns 7, it is still maintaining its lexical scope

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b)
        }
        y();
    }
    x();
}
z();

// y is having access to its parent (x) and the parent of parent (z)


/*
    USES OF CLOSURES

    - module design pattern
    - currying
    - functions like once
    - momoize
    - maintaining state in async world
    - setTimeouts
    - iterators
*/