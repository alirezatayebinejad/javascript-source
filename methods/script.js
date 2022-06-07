//print
console.log("any variable or value here");//prints to the console in browser inspedt tool

let name="methods";
alert("file name: "+ name +"\n"+"this file contains all \"methods\" we need");

isNaN("value"); //if value is number: output=true else output=false

prompt("enter your name: "); // get a value from user


//string methods
let text = 'alireza is the best';
let firstIndex = text[0];//0=a 1=l 2=i ... 18=t
let stringLength= text.length;//19

text.charAt(2);//i
text.charCodeAt(2);//i=72 asci code
text.concat(" so true");//alireza is the best so true
text.trim();//delete all spaces before and after string not between
text.toLowerCase();//lowercase all string charachters
text.toUpperCase();//upercase all string charachters
text.search("is");//return the index of start char of 'is' in string
text.indexOf("is");//like search
text.includes("is");//true if 'is' exist in string otherwise false



