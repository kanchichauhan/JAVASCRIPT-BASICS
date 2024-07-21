const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key); // Prints 'a', 'b', 'c'
  console.log(obj[key]); // Access the corresponding value: 1, 2, 3
}

const arr = [1, 2, 3];

for (const value of arr) {
  console.log(value); // Prints 1, 2, 3
}

/*
for...in is useful when you need to work with object properties and their values, while 
for...of is great for iterating through the values of an iterable like arrays, strings, sets, or maps
*/
