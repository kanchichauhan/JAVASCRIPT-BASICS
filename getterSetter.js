/*In JavaScript, there are two kinds of object properties:

=> Data properties - we're referring to properties of an object that store data values.
=> Accessor properties - accessor properties are methods that get or set the value of an object.

For that, we use these two keywords:
    get - to define a getter method to get the property value
    set - to define a setter method to set the property value
*/

// ****************** GETTTER ******************** //

const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
// console.log(student.getName()); // error


// ********************** SETTER ********************* //

const student1 = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student1.firstName); // Monica

// change(set) object property using a setter
student1.changeName = 'Sarah';

console.log(student1.firstName); // Sarah


// ********* Can get & set properties using Object.defineProperty ******* //

const student2 = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student2, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student2, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student2.firstName); // Monica

// changing the property value
student2.changeName = 'Sarah';

console.log(student2.firstName); // Sarah