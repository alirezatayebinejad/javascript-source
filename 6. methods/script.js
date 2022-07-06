//print
console.log("any variable or value here"); //prints to the console in browser inspect tool
let theName = "methods";
alert(
  "file name: " + theName + "\n" + 'this file contains all "methods" we need'
);

isNaN("value"); //if value is number(int or stringnum): output=false else output=true
prompt("enter your name: "); // get a value from user

//string methods
let text = "alireza is the best";
let firstIndex = text[0]; //0=a 1=l 2=i ... 18=t
let stringLength = text.length; //19

text.charAt(2); //i
text.charCodeAt(2); //i=72 asci code
text.concat(" so true"); //alireza is the best so true
text.trim(); //delete all spaces before and after string not between
text.toLowerCase(); //lowercase all string characters
text.toUpperCase(); //upercase all string characters
text.search("is"); //return the index of start char of 'is' in string
text.indexOf("is"); //like search
text.includes("is"); //true if 'is' exist in string otherwise false
text.startsWith("is");
text.slice(8, 13); //'is the' number of index, to this index
text.substr(8, 6); //'is the' number of index, this number after the first number
text.substring(8, 13); //'is the' number of index, to this index like slice

//math methods
Math.PI(); //p=3.14...
2 ** 3; //8 power
Math.pow(2, 3); //8
Math.sqrt(16); //4
Math.abs(-10); //10 delets negetive |-12|=12
Math.min(20, 90, 56, 5, 56); // 5 minimum
Math.max(20, 90, 56, 5, 56); // 96 maximum
Math.floor(14.6); // 14
Math.trunc(14.6); // 14 like floor
Math.round(12.8); // 13 round the number 12.4=12
Math.ceil(12.8); // 13 allways round to the top 12.4=13
Math.random(); // a random number between 0 to 1
Math.random() * 10; // a random number between 0 to 10

//arrays methods
let scores = [15, 14, 5, 12, 4, 20];
let students = [
  { name: "ali", last: "ahmadi", age: 22 },
  { name: "reza", last: "alavi", age: 25 },
  { name: "sara", last: "mohseni", age: 20 },
];

scores[6] = 16; //adds the next array value now scores=[15,14,5,12,4,20,16];
scores.push(13, 17, 1); //push values into array scores=[15,14,5,12,4,20,16,13,17,1];
scores.pop(); //pop out the last value from array scores=[15,14,5,12,4,20,16,13,17];
scores.shift(); //delets first element of array scores=[14,5,12,4,20,16,13,17];
scores.unshift(8, 7); //add to first of array scores=[8,7,14,5,12,4,20,16,13,17];
scores.splice(2, 3); //delets arrays element starting from 2 to 3 times (2,3,other inputs to replace what we deleted)scores=[8,7,20,16,13,17];
scores.includes(4); //true if it finds & false if it doesnt find - we can use a second input as sart index
students.forEach(function (number) {
  console.log(number.age);
}); //function will execute 0 to 2 times  (array length) and every time one array value goes into function input as number variable + for objects & arrays
let isInUsers = students.some(function (user) {
  //enonymous function
  console.log(user);
  return user.name == "reza";
}); //like forEach but it returns true or false and function codes will execute for every array elements untill it reaches a true then stops
let isAll = ages.every(function (age) {
  console.log(age);
  return age > 18;
}); //like some but it will stop executing when it reaches a false and return true or false
let studentIndex = students.findIndex(function (st) {
  return st.age == 25; // 1 returns index of array element which the condition is true. executed loop untill find the element
});
let studentInfo = students.find(function (st) {
  return st.age == 25; // 1 returns all info of array element which the condition is true. executed loop untill gets true
});
let scoresPower = scores.map(function (score) {
  return score ** 2; //do this to every element of array and return it to another array (in scoresPower)
});
let under15 = scores.filter(function (score) {
  return score < 15; //returns elements that are only less than 15 and store it in under 15 array
});
Array.isArray(scores); //checks if the given input is array or not returns true false
scores.indexOf(5); //return the index of given number in array or returns -1 if it doesnt find
scores.lastIndexOf(5); //return the index of given number in array (the last one) or returns -1 if it doesnt find
scores.slice(2, 5); //returns all element from index 2 to index 5
scores.join("/"); //conect all elements together with / between
scores.reverse(); //reverse array elements
theName = "alireza";
theName.split(""); //convert a string to array. input can be a character to seperat with in string

//function methods
var i = 10;
var timer = setInterval(function () {
  if (i === 0) {
    alert("Game Over");
    clearInterval(timer);
  }
  console.log(i);
  i--;
}, 1000); // function reexecute every 1000ms = 1s
setTimeout(function () {
  console.log("hello");
}, 5000); //function executed after 5000ms = 1s - function can have input and it should send from anothe parameter after 5000

//dates method
let myTime = new Date();
myTime; //returns all time information
myTime.getFullYear(); //Get the year as a four digit number (yyyy)
myTime.getMonth(); //Get the month as a number (0-11)
myTime.getDay(); //Get the day as a number (0-6)
myTime.getHours(); //Get the hour (0-23)
myTime.getMinutes(); //Get the minute (0-59)
myTime.getSeconds(); //Get the second (0-59)
myTime.getMilliseconds(); //Get the millisecond (0-999)
myTime.getTime(); //Get the time (milliseconds since January 1, 1970)
myTime.getDate(); //Get the day in mounth date (1-31)
Date.now(); //Get the time. ECMAScript 5.

//window
window.innerHeight; //returns height of the users window
window.innerWidth;
//more in BOM

//console
let num1 = 2;
let num2 = 3;
console.log(num1 + num2);
console.error("Data is not defined");
console.info("Api response status is 404");
console.warn("Api response status is 404");
console.assert(num1 + num2 < 10, "BIG"); //checks the condition if true print the string
let products = [
  { id: 1, name: "LapTop", price: 12000000 },
  { id: 2, name: "Phone", price: 7000000 },
  { id: 3, name: "SSD Hard", price: 2000000 },
  { id: 4, name: "Cool Pad", price: 500000 },
];
console.table(products); //prints the product in a table
console.time("For loop");
for (let i = 0; i < 1000000; i++) {
  //Codes
}
console.timeEnd("For loop"); //print time of execution of the codes in between
console.group("first logs");
console.log("First log in gp");
console.log("Second log in gp");
console.log("Third log in gp");
console.groupEnd("first logs"); //groups all logs in between
console.log("%cApi reponse status in 200", "color: red;"); //change color of a log
