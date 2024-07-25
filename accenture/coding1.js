/*
Input  : 'Kanchi'.sayHello()
Output : Hello Kanchi

Approach : we need to attach a prototype method sayHello() to String
*/

String.prototype.sayHello = function () {
    return `Hello ${this}`
}

console.log('Kanchi'.sayHello())