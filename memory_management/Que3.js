myFun();

var myFun = function () {
    console.log('first');
};

myFun();

function myFun() {
    console.log('second');
}

myFun();

// output will be
/*
    Second
    First
    Second
*/
// the memory is created first
/*
    myFun is created with undefined value
    then my Fun is assigned the value of 
        myFun: function myFun() {
                console.log('second');
            }

    then in the execution phase when it get executed,
    it will execute 'second'
    then again myFun gets reassigned to 
        myFun: function myFun() {
            console.log('first');
        }
    then it will print first
*/