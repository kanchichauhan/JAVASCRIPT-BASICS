/* Memoization is a specific form of caching that is used in dynamic programming.
The purpose of caching is to improve the performance of our programs and keep data 
accessible that can be used later. 
It basically stores the previously calculated 
result of the subproblem and uses the stored 
result for the same subproblem. This removes 
the extra effort to calculate again and again 
for the same problem.
*/
let summedval;

function calculateValue () {
    console.log('return')
    if (summedval) return summedval
    console.log('not return')
    const a = 10
    const b = 11
    summedval = a+b;
    return a + b;
}

function main() {
    let res = calculateValue();
    console.log(res)
}

main();
main();
main();
main();
main();

// it won't do expensive calculation again





