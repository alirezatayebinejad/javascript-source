//varaiables are for store data in a place so we can use that data later in our program

// how to declare variables
let name = "alireza";
var time = 12;
const age = 24;

//to show variable we can use alert but better option is consol.log
//consol.log shows in consol section in browser inspect tool
console.log(name);
console.log(age);

// we should allways use let because var is old
// const is for constant variables means that the value can not change later in program but let can

//data types

let myName = "alireza"; //string between " " or ' '
let myAge = 22; //number
let isMale = true; //boolean  only true or false
let noseSize = null; //null  means empty variable
let feetSize; //undefined means varible has no values
let myCars = ["bmw", "benz", "porshe"]; //arrays can store more than one value can be number, string, boolean & ...
let aCar = ["bmw", 2500, true]; //arrays can contain any of variable type
let Ali = { name: "ali", last: "ahmadi", age: 22 }; //objects
Ali.age; //22
let students = [
  { name: "ali", last: "ahmadi", age: 22 },
  { name: "reza", last: "alavi", age: 25 },
]; //arrays of objects
students[2].age; //25

console.log(typeof myAge); // typeof shows the type of the variable

//get input from user and store it in a variable
let userName;
userName = prompt("Enter your name: "); //gets input

//data type conversion
let ageString = "22";
console.log(Number("   123   ")); // 123
console.log(Number("123z")); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0

let value = true; // boolean
value = String(value); // string
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

//operators
let a = 2,
  b = 5;

let plus = a + b; //7
let minus = a - b; //-3
let multiplication = a * b; //10
let devision = b / a; //2
let remain = a % b; //1
let exponentiation = a ** b; //32
a++; //a=3
b--; //b=4
a = a + 5; //or a+=5; or any operator instead of +
let c = 2;
let d;
d = c++; //d=2
c = 2;
d = ++c; //d=3
