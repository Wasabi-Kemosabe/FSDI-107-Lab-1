module.exports = {
    sayHello: function (name) {
        console.log(`Hello: ${name}`);
    },
    smaller: function (num1, num2) {
        return num1 < num2 ? num1 : num2;
    },
    greater: function (num1, num2) {
        return num1 > num2 ? num1 : num2;
    },
    divide: function (num, by) {
        return by == 0 ? console.log("You can't divide by zero!") : num / by;
    },
    isEven: function (num) {
        return num % 2 == 0 ? true : false;
    }
};