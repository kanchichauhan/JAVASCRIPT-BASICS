// Currying = Multiple closures
/* Currying => It is a technique in functional programming, that transforms the
        function of multiple arguments into several functions of a single argument in sequence. */
/* lets say we want to pass 3 args into a function, & there is a case where even if one of the args
        is missing it should not work*/

function add(a, b, c) {
    return a+b+c
}

const sum = add(1, 2)
console.log(sum)

// now there could be thousand's of args where we have to wait for the response, in that case we will use closure in order to get info one by one

function add(a) {
    return function funcb(b) {
        return function funcc(c) {
            return a+b+c
        }
    }
}

const currysum = add(1)(9)
console.log(currysum)

// practical example
// lets say we have to sent email where we need to, subject, body

// function sendEmail(to) {
//     return function (subject) {
//         return function (body) {
//             console.log(`send email to ${to} with subject ${subject} & message ${body}`)
//         }
//     }

// }

const sendEmail = (to) => (subject) => (body) => `send email to ${to} with subject ${subject} & message ${body}`

let step1 = sendEmail('k.chauhan27199@gmail.com');
let step2 = step1('new order confirmation');

console.log(step2('here is something for you'))