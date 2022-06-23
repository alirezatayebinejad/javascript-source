//add onclick="funcName()"  attribute to html element
//oneclick is an event and the function will execute if user click on this element
function funcName(){
    alert("you clicked the button");
}

//better way to use events directly in javascript
let theElem = document.querySelector('.btn');
theElem.addEventListener('click',funcName);
//here onclick becomes click
/* or with function expression

theElem.addEventListener('click',function(){
        alert("you clicked the button");

});
*/

//remove events
theElem.removeEventListener('click',funcName)


//events
/*
    
    other events:

    onkeypress //just keys that are charachters or numbers tha can be typed
    onkeydown  // almost all keys
    onkeyup    
    
    focus  //when an input are clicked and active
    blur   //when we get out of an input

    onclick
    ondblclick  //when double click on an element

    onchange    //when value of an element changes

    onsubmit //when user click the form submit button sets for input type=submit

    oncontextmenu //when right click on elemen //can prevent right click with return false instead of function call

    oncopy
    oncut
    onpaste
    
    onload  //when an element loaded
    DOMContentLoaded //like onload but here just after dom loaded not css js etc...
    unonload
    onbeforonload

    onmousmove
    onselect //when a text selected just for input and textarea

    ontouchstart
    ontouchmove
    ontouchend
    ontouchcancel
*/

//prevent an event default behaviour
event.preventDefault(); // just for element that cancelable is true

