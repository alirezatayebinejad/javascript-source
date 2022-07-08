//local storage
localStorage.setItem("keyName", "value"); //adds to inspect application tab -> local storage
localStorage.getItem("keyName"); //gets the value
localStorage.removeItem("keyName"); //removes this key in local storage
localStorage.clear(); //clear all user's browser local storage
localStorage.setItem("keyName", JSON.stringify(["ali", "amin", "amir"])); //make every other typeofs into string
JSON.parse(localStorage.getItem("keyName")); //make every string value to its real typeof

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
let number=700000000;
let goodNumber=700_000_000;
//browser ignores '_' and not working in strings