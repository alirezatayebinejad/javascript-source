let a = 3,
  b = 4;

//logical operators

console.log(a == b); //is equal?  false
console.log(a != b); //is not equal? true
console.log(a > b); //is a greater than b? false
console.log(a < b); //is a less than b? true
console.log(a === b); //is the value and the typeof of a and b same? true

//bitwise operator
/*

  a=3 || b=0   //OR: atleast one of them should be true so the statement be true
  a=3 && b=0   //AND: both of themshould be true so the statement be true


*/

//ternary conditions
let result;
result = a == b ? true : false; //result becomes false - we can put other codes instead of true or false

//if else

if (a < b) {
  //these codes will execute if (a==b) is true
}

if (a == b) {
  //these codes will execute if (a==b) is true
} else {
  //these codes will execute if (a==b) is false
}

if (a == b) {
  //these codes will execute if (a==b) is true
} else if (a == b) {
  //these codes will execute if (a==b) is true
}
//  multiple else if can be writen here
else {
  //these codes will execute if (a==b) is false
}

//switch case
let c = 2 + 2;

switch (c) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly!"); //this code executes
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I don't know such values");
}
