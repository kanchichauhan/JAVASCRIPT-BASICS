variable = 10;

(() => {
    foo = 100;
    console.log(variable);
    var foo = 100;
    variable = 20;
    console.log(variable);
})();

console.log(foo);
console.log(variable);
var variable = 30;

// output 10 20 referenceError: foo is not defined
// 3-9 => it will get removed from the memory once the function is fully executed
// that's why we can't access it outside the function