//error handling with try catch
try {
  //if these codes have error it sends the error to err
  //can send a custom error with " throw 'message' "
} catch (err) {
  //these codes will execute if codes from try has an error
} finally {
  //these codes will execute no matter what
}

//async vs sync
//sync
console.log("1");
console.log("2");
console.log("3");
console.log("4"); //output: 1 2 3 4
//async
console.log("1");
setTimeout(function () {
  console.log("2"); //executes after 3 seconds
}, 3000);
console.log("3");
console.log("4"); //output: 1 3 4 2

//strict mode
/*
  write "use strict" in first line of js file 
  to prevent you from writing some old buggy codes
  can be written in first line of a scope 
  to just use strict mode in that scope instead of global
*/

//numeric seperator ES12
//we can use '_' sign in numbers to increase readablity
let number = 700000000;
let goodNumber = 700_000_000;
//browser ignores '_' and not working in strings

//RegEx ES6
let txt = "i am alireza ,web developer";
let regexCode = /alireza/; //finds 'alireza' pattern in a string
regexCode = /a.m/; //first letter 'a' second enything third 'm' can be /a..m/ for four letters etc...
regexCode = /a.+n/; //first 'a' between and letter for any long and last one should be 'n'
let emailVerification = /.+@.+.com/; // email true pattern
console.log(regexCode.test(text)); //true or false

//this keyword
//on html element <li onclick="removeList(this)">li</li> 'this' send the tag element
//in functions this returns the onject of Window
//in Objects it points to the object itself
funcName.call(objName); //this code will call funcName with setting 'this' in funcName to points to objName  keyword
funcName.call(objName,funcInput1, funcInput2);
funcName.apply(objName,[funcInput1, funcInput2]);//like call
funcName.bind(objName,funcInput1, funcInput2);//like call and apply but it will not automatically call the function
//these are useful when two or more objects has same functions we write it in one of the with this then with call apply... we make 'this' points to the object we want
//this of a function within an object is not pointing to the object we should bind the function to the object but in arrow functions it bind it automatically


