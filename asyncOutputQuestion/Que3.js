console.log('A')


setTimeout(() => console.log('C'), 2000);

fetch('https://jsonplaceholder.org/posts/1').then((resp) => resp.json()).then((data) => console.log('data 1', data))
fetch('https://jsonplaceholder.org/posts/2').then((resp) => resp.json()).then((data) => console.log('data 2', data))

console.log('D')