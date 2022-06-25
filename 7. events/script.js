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
    onscroll //can use with some properties like document.documentElement.scrollTop/left

    ontouchstart
    ontouchmove
    ontouchend
    ontouchcancel

    //drag and drops events
    //for dragged element
    draggable="true" // to make an element draggable
    ondragstart
    ondrag
    ondragend
    //for the element that we want to drop in
    ondragenter
    ondragover // for the element that we want to drag into
    ondragleave
    ondrop // make it droppable in :|
    //to get an alement and drag in elsewher
    event.dataTransfer.setData('idname',event.target.id)
    event.dataTransfer.getData('thatidname')

    
*/

//prevent an event default behaviour
event.preventDefault(); // just for element that cancelable is true

//defer & async
/*
add defer attribute no value to a html script element to start downloading script file while move on and parsing Dom
add async attribute no value to a html script element to start downloading script file while move on and parsing Dom
with async script file may execute in the middle of parsing dom but defer wait till the end so the defer is better
*/
