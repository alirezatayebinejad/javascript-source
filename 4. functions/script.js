//function declaration
function fName() {
  //these codes will execute if function call anywhere in program
};
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
function averageCalculator (num1, num2, num3) {
	var sum = num1 + num2 + num3
	var average = sum / 3
	alert("Average of your numbers is " + average)
}
averageCalculator(54, 98, 28)


//return keyword
function sumNumbers (num1, num2) {
    let result = num1 + num2;
	return result;
}

let sumResult = sumNumbers(2, 8);


//anonymous function
students.some(function (user) { // we can not call them //some is a method that reads all variable values send it as user to input of anonymous function
  console.log(user);
  return user.name == "reza";
});

//IIFE functions 
(function(){ //it calls itself
  console.log("IIFE function");
})()

