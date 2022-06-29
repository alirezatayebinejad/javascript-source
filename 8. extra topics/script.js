//local storage
localStorage.setItem('keyName','value'); //adds to inspect application tab -> local storage
localStorage.getItem('keyName'); //gets the value
localStorage.removeItem('keyName') //removes this key in local storage
localStorage.clear(); //clear all user's browser local storage
localStorage.setItem('keyName', JSON.stringify(['ali','amin','amir']))//make every other typeofs into string
JSON.parse(localStorage.getItem('keyName'));//make every string value to its real typeof

