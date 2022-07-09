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
