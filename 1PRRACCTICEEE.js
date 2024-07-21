let obj = {};
function factorial(num) {
    if (obj.hasOwnProperty(num)) {
        console.log('if');
        return obj[num];
    } else {
        console.log('else');
        if (num > 1) {
            obj[num] = num * factorial(num-1);
            return num * factorial(num-1);
        } else {
            return 1
        }
    }
}

console.log(factorial(5))
console.log(factorial(5))
console.log(factorial(5))
console.log(factorial(5))
console.log(factorial(5))