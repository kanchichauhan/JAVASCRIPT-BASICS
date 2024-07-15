var fullname = 'kanchi chauhan';

var obj = {
    fullname: 'hacked full name',

    prop: {
        fullname: 'inside prop',
        getFullName: function () {
            return this.fullname;
        },
    },

    getFullname: function () {
        return this.fullname;
    },

    getFullNameV2: () => this.fullname, // in browser refer to window

    getFullNameV3: (function () {
        return this.fullname;
    })(),
};

console.log(obj.prop.getFullName());
console.log(obj.getFullname());
console.log(obj.getFullNameV2());
console.log(obj.getFullNameV3); // not a function, its a property
