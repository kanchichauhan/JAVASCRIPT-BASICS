for  (var i=0; i<10; i++) {
    setTimeout(() => console.log(i), 0)
}

// var is global variable and until setTimeout gets executed var became 10, var updates the value
// Output: 
/*
    10
    10
    10
    10
    10
    10
    10
    10
    10
    10
*/

for  (let i=0; i<10; i++) {
    setTimeout(() => console.log(i), 0)
}

// let creates a new variable everytime locally