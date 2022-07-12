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

//promise ES6 - for asycronize programmin and good for preventing tutorial hell with callback functions
//forexample thing like checking user login from database which takes time we use promises to do that
let myPromise = new Promise((resolve, reject) => {
  //if we do the promise we cal resolve and if we dont we call reject

  setTimeout(() => {
    console.log("Login check !!");
    if (loginFlag) {
      resolve();
    }
  }, 3000);
});
function success() {
  console.log("success :)");
}
function error() {
  console.log("error :(");
}
myPromise.then(success, error);
//or
myPromise
  .then(success)
  .catch(error)
  .finally(() => {
    //this will execute whether promis is resolved or rejected
    console.log("promise is done.");
  });
//another example
let books = [
  { id: 1, name: "Bi Shouri", price: 95000 },
  { id: 2, name: "Bimarefat", price: 56660 },
  { id: 3, name: "pedar", price: 75000 },
];
function addBook(name, price) {
  let newBook = {
    id: books.length + 1,
    name,
    price,
  };
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (books.push(newBook)) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  });
}
addBook("golestan", 90_000).then(() => {
  console.log(books);
});
//in these examples we used timeout because we dont have an api that takes time right now
//phases of promise: pending=no resolve and no reject , fullfilled:resolved , rejected: rejects
//we can have multiple .then and if promise resolved first .then()happens and first .then() returns a value and next then() gets the value from its input
