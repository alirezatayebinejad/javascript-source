//for loop syntax
for (let i = 0; i < 10; i++) {
    //these codes will be executed for 10 times
}
//example
let myName = "alireza programmer";
for (let i = 0; i < myName.length(); i++) {
    console.log(i, " => ", myName[i]);
}

//while loop syntax
i = 0;
while (i < 10) {
    //these codes will be executed for 10 times
    i++;
}
//example
myName = "alireza programmer";
i = 0;
while (i < myName.length()) {
    console.log(i, " => ", myName[i]);
    i++;
}

//do while
i = 0;
do {
    //these codes will be executed 10 times but it will be executed once whether condition is true or not
    i++;
} while (i < 10);

//for of loops ES6
let user = [1, 5, 6, 2, 1];
for (let property of user) {
    //every time one user value is in property till the end
    console.log(property);
}
// used for
//iterable => countable
//likeArray => arguments in functions or list of html elements like li's
//for objects we can use for in loops ES6
let userObj = {
    id: 1,
    name: "ali",
    age: 19,
};
for (let item in userObj) {
    //every time one userObj property is in item
    console.log(item);
}
