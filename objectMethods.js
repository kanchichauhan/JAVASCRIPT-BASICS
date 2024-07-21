// ************** Object Methods **************** //

// Object.assign(target, source) = Copies properties from a source object to a target object

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, b: 4};

const obj3 = Object.assign(obj1, obj2);
console.log(obj3)

// Object.create(object) = creates a new object, using an existing object as the prototype of the newly created object.
const Obj = {a:1, b: 2};

const newObj = Object.create(Obj);
console.log(newObj.a);

// Object.entries(object) = Returns an array of the key/value pairs of an object

const object1 = {
    a: 'somestring',
    b: 42,
};

console.log(Object.entries(object1))

for (const [key, value] of Object.entries(object1)){
    console.log(`${key} : ${value}`)
}


// Object.keys(object) = Returns an array of the keys of an object

for (const keys of Object.keys(object1)) {
    console.log(keys);
}

// Object.values(object) = Returns an array of the property values of an object

for (const keys of Object.values(object1)) {
    console.log(keys);
}


// ************** Object Properties **************** //

// Object.defineProperty(object, property, descriptor) = Adding or changing an object property

const defineObj = {};

Object.defineProperty(defineObj, 'property1', {
    value: 42,
    writable: false
});
console.log(defineObj.property1)

// Object.defineProperties(object, descriptors) = Adding or changing object properties

Object.defineProperties(defineObj, {
    prop1: {
        value: {
            a: 1,
            b: 2
        }
    },
    prop2: {
        value: 12
    }
});
console.log(defineObj.prop1)

// Object.getOwnPropertyNames(object) = Returns all properties as an array

const objct = {
    a: 1,
    b: 2,
    c: 3,
};

console.log(Object.getOwnPropertyNames(objct));