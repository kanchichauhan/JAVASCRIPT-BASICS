const piyush = {
    name: 'Kanchi chauhan',
    sayName: function () {
        console.log(this.name);
    },
};

setTimeout(piyush.sayName.bind(piyush), 3*1000);
