var a = 5;
var b = 10;
c = a + b;
d = a * b;

console.log("addition: " + c);
console.log("multiplication: " + d)

// function statement

function greetings() {
    console.log("Hi there!")
};
greetings()

var intro = require('./intro')
intro;

// module export
var greet = require('./greet/greetings');

greet.en();
// greet.bm();

// code module
var util = require('util')
var name = "Rijwan";
var myName = util.format("my name is %s", name)
util.log(myName)