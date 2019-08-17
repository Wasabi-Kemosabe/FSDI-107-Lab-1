var http = require('http');

var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('This is root page');
});

app.get('/contact', (req, res) => {
    res.send('This is contact page');
});

app.get('/about', (req, res) => {
    res.status = 201;
    res.send('Developer: Angelo Totanes');
});

app.get('/homework', (req, res) => {
    /**
     1. Give the sum of all the numbers in the array. Then give the multiplication of all the numbers in the array.
     2. Find the vowels in a given text
     */
    var numbers = [12, 23, 98, 23, 12, 89, 0, 43, 0, 12, 77, 89, 34, 0, 1, 23, 32, 0, 89];
    var sum = 0;
    var multiply = 1;

    var text = "This is just Another Exercise For You TO PRacTiCe codING soluti0Ns to probl3ms";
    var vowels = 'aeiou';
    var textAnswer = [];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;
        multiply *= element;
    }

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        if (vowels.includes(letter.toLowerCase())) {
            textAnswer.push(letter);
        }
    }
    res.send('Total sum is ' + sum + ' and the total multiplication is ' + multiply + '<br>' + textAnswer);
})

app.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});

/*
To stop the server press control + C
*/