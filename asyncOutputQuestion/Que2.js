console.log('A');
console.log('B');

async function getData() {
        return 1
}

setTimeout(() => console.log('C'), 5000);

getData().then(() => console.log('I got the data'));

console.log('D');
console.log('E');
console.log('F');
