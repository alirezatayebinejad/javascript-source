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
text.slice(8,13);//'is the' number of index, to this index
text.substr(8,6);//'is the' number of index, this number after the first number
text.substring(8,13);//'is the' number of index, to this index like slice

//math methods
Math.PI();//p=3.14...
2**3;//8 power
Math.pow(2,3);//8
Math.sqrt(16);//4
Math.abs(-10);//10 delets negetive |-12|=12
Math.min(20,90,56,5,56);// 5 minimum
Math.max(20,90,56,5,56);// 96 maximum

Math.floor(14.6);// 14
Math.trunc(14.6);// 14 like floor
Math.round(12.8);// 13 round the number 12.4=12
Math.ceil(12.8);// 13 allways round to the top 12.4=13
Math.random();// a random number between 0 to 1
Math.random()*10;// a random number between 0 to 10






