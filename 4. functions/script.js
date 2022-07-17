//function declaration
function fName() {
    //these codes will execute if function call anywhere in program
}
//calling function
fName();

//function expression
let fName2 = function () {
    //these codes will execute if function call anywhere in program
};
//calling function
fName2();

//function parameter
function fName(parameterName) {
    //we can get two or more parameter using camma in between
    //these codes will execute if function call anywhere in program
    // we can use parameterName here in codes
}
//calling function
fName("parameterName value here"); //we can send two or more parameter using camma in between
//if we dont send an input varible the varible will be undefined
//we can assign to input variable inside the function

//example
function averageCalculator(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    var average = sum / 3;
    alert("Average of your numbers is " + average);
}
averageCalculator(54, 98, 28);

//return keyword
function sumNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

let sumResult = sumNumbers(2, 8);

//anonymous function
students.some(function (user) {
    // we can not call them //some is a method that reads all variable values send it as user to input of anonymous function
    console.log(user);
    return user.name == "reza";
});

//IIFE functions
(function () {
    //it calls itself
    console.log("IIFE function");
})();

//callback function
function logger(func) {
    console.log("in logger: ", func);
}
function logger2() {
    console.log("hello in logger2");
}
logger(logger2); //when we send function to another function shouldnt use () to prevent executing in intrepeting time

//pure functions
/*
  a pure function should not have different outputs for same inputs in multiple calls
  should not use outside variables in itselfs

*/
//composition function - like neseted use of functions
insertToLi(toLowerCase(trim(todoInputElem.value)));

//HOF => higher order function = a function that gets another function as input like 'logger' or return function like:
function hofExp() {
    return function () {
        console.log("inner function");
    };
}
hofExp(); //returns the function
hofExp()(); //execute the return function
let hofInner = hofExp();
hofInner();

//arrow functions ES6
const pow = (num1, num2) => {
    //codes
    return num1 ** num2;
};
pow(2, 3);
//can delete paranthesis or curlybraces if we have one code
const plusOne = (num1) => num1 + 1;
//examples - numbers is an array
let mapData = numbers.map((number) => number * 2);
//or - btn is a button
btn.addEventListener("click", (event) => {
    console.log(event);
});

// 'arguments' keyword ES6
/*
  arguments in functions contains all inputs of the function
  its a likearray can't be loopover(i just made this word up :| )
  can be converted to an array with Array.from(arguments)
  it can not used in arrow functions
*/
function pow(num1, num2) {
    console.log(arguments); //returns arguments{0:2, 1:3}
}
pow(2, 3);

// rest operator ES6
const sum = (a, ...args) => {
    console.log(...args); //its a real array contains 13 14 15 16
};
sum(12, 13, 14, 15, 16);
