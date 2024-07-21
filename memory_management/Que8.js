const piyush = {
    name: 'piyush chauhan',
    sayName: function () {
        console.log(this.name);
    },
};
const kanchi = {
    name: 'Kanchi chauhan',
    sayName: function () {
        console.log(this.name);
    },
};

setTimeout(kanchi.sayName.bind(piyush), 3*1000); // piyush chauhan
