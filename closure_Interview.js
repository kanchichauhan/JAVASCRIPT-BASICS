function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    console.log('namaste JS');
}
x();

// var i will refer to the same memory location, so basically when 1 sec will be finished by that time the i would be referring to the value 6

// 1 solution - we can use let instead of var bcz let is block scope so it will always make a new copy with a new value so it won't be referring to the same variable by the time 1 sec is completed
function x() {
    for (let i = 1; i <= 5; i++) {   // using let instead of const
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    console.log('namaste JS');
}
x();

// 2 solution - we can wrap it inside a closure so everytime a new function will be called it will create a new copy of that particular variable

function x() {
    for (var i = 1; i <= 5; i++) {
        function close (i) {
            setTimeout(() => {
                console.log(i);  //we will be having a new copy of i
            }, i * 1000);
        }
        close(i) // everytime we call this function it will create a new copy of i
    }
}
x();