var mathLib = require('./myMath');

function toUpper(text) {
    return text.toUpperCase();
}

function toLower(text) {
    return text.toLowerCase();
}

function printEvents(howMany) {
    // Print n even numbers
    // IE for howMany = 2, you should cl 2, 4
    // IE for howMany = 3, you should cl 2, 4, 6
    for (let i = 2; i <= 2 * howMany; i += 2) {
        console.log(i);
    }
}

function init() {
    // console.log('Angelo');
    // var res = mathLib.smaller(2, 9);
    // console.log(res);
    // var res2 = mathLib.greater(45345, 329349583);
    // console.log(res2);
    // var res3 = mathLib.smaller(4345345, 1);
    // console.log(res3);
    // var res4 = mathLib.divide(2, 4);
    // console.log(res4);
    // var res5 = mathLib.divide(1, 0);
    // console.log(res5);
    // mathLib.sayHello('Angelo');
    // console.log(toUpper('heylow!'));
    // console.log(toLower('HEYLOW!'));
    var results = 15 / 2;
    var residue = 15 % 2;
    console.log(`Divide: ${results}`, `Residue: ${residue}`);
    console.log(mathLib.isEven(44));
    printEvents(10);
}

init();

/*
Console management commands:
cd = change directory
../ = go up one level
clear = clears screen
ls = list of files in the current folder

Answer Pre/Post Test
Brain Exercise: print however many numbers of even numbers provided in the parameters
*/