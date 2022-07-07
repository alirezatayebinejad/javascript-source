//varaiables are for store data in a place so we can use that data later in our program

// how to declare variables
var time = 12; // no scoping, can be defined multiple times with the same name, can be defined after assignment etc #not_good
let name = "alireza"; // has scoping, can not defined multiple times with the same name or after assignment #good
const age = 24; // can not changed during program also should have value in the first place
//always use let and const

console.log(name); //to show variable we can use alert but better option is consol.log
console.log(age); //consol.log shows in consol section in browser inspect tool

//data types//////////////////////////////////////////////////////////////////////////

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
students[1].age; //25

console.log(typeof myAge); // typeof shows the type of the variable
/*truthy and falsy values:
falsy: zero number, empty charachter, undefined,NaN,empty array
truthy: other than falsy values
*/

//get input from user and store it in a variable
let userName;
userName = prompt("Enter your name: "); //gets input

//data type conversion
let ageString = "22";
console.log(+ageString); //22 number
console.log(Number(ageString)); //22 number
console.log(Number("   123   ")); // 123 number
console.log(Number("123z")); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0

let value = true; // boolean
value = String(value); // string
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

//operators////////////////////////////////////////////////////////////////////////
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

/*primitive variable vs reference data types

primitive: number bigInt boolean symbol null undefined string

a=b    '=' means we make copy of b to a when we change b or a later the other one will not change

reference: objects array function

a=b    '=' means a is equal to b and whenever we change a or b the othe one will change too!
*/

//spread syntax
//we know array1 = array2 means both are the same and if we change array1 array2 is going to change too
//but we can use ES6 spread syntax to fix this
array1 = [...array2];
//now two arrays are not one and we can change one of them without changing another
//or
array1 = [...array2, 100, ...array3]; //it concat all of it and send it to array1
//Can be used for objects too
newObj = {...oldObj}
