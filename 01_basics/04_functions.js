function nameOfFunction() {
    // funnction body
}

// declaring a function named greet()
function greet() {
    console.log("Hello there");   //// function call => greet(); 
}
greet();
//https://www.programiz.com/sites/tutorial2program/files/javascript-function-example1.png

// sum of two numbers
function add(a ,b) {
    return a + b;
}

let number1 = parseFloat(prompt("Enter first number: ")); //prompt is used to take input from user
let number2 = parseFloat(prompt("Enter second number: ")); //parseFloat is used to convert string to float

let result = add(number1, number2);

console.log("The sum is :" + result);
// add two numbers
function add(a, b) {
    console.log(a + b);
}

// calling functions
add(3, 4);
add(2, 9);

// function expression
let x = function (num) {return num * num}; 
console.log(x(4));

let y = x(7);
console.log(y);

