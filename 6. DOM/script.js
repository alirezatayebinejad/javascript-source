// with DOM we can minipulate web page elements

// get elements
let h1Elem = document.getElementById('title');
let liElems = document.getElementsByClassName('list-item');
let listItems = document.getElementsByTagName('li');
let firstListItem = document.querySelector('#box');
let ulItems = document.querySelectorAll('.list-item');
let inputElement = document.getElementById('input');
//get & set attribute
h1Elem.getAttribute('class'); //can get any attribute even those who are not reall html attribute unlike . // can not get a setted propert for html element directly in js
h1Elem.setAttribute('id','about');
h1Elem.onclick = function(){
    //do sth //this is another way to set an attribute and call a funciton
} 
//get attribute with .
h1Elem.id;//gets only reall html attribue/object property //can get a setted propert for html element directly in js like the code bellow //but for class we should use .className
h1Elem.NewProperty='new attribute'; 
//check or remove attribute
h1Elem.removeAttribute('placeholder');//removes a specific attribute 
h1Elem.hasAttribute('href');//checks if an element has a specific attribute or not / tru or false
//set css style
h1Elem.style.color='blue';//any css property
h1Elem.style.fontWeight='bold';
//get and change inside of html tags
liElems[2].innerHTML;//all three show the value of element
liElems[2].innerText;
liElems[2].textContent;
liElems[2].innerHTML='home';//for all elements
inputElement.value='react';//for forms and input
//create element and send it to html
let ulElem = document.querySelector('ul');
let newLiItem=document.createElement('li');
newLiItem.innerHtml='products';
newLiItem.setAttribute('class','list-item');
ulElem.append(newLiItem);//this //can be any string or node //can have multiple inputes //can not return anything in a variable
ulElem.appendChild(newLiItem);//or this //just add Node (html element) // just one input //can return nodes to a variable
//remove elements from dom
ulElem.remove(); // just remove a single element not array 
//add or remove css classes
h1Elem.classList.add('classname');//adds class
h1Elem.classList.remove('classname');//removes class
h1Elem.classList.toggle('classname');//adds class if it doesnt exist removes class if it exist

//event minipulation
h1Elem.addEventListener('submit',function(event){
    console.log(event);//it logs all element event properties which can be used to minipulate the element and user interaction
    event.target; // an example of a proprty that returns the element
    //other properties can be seen in consol.log(event)
})

//Nodes
h1Elem.nodeName //name of the node
h1Elem.nodeType //type number of node

//siblings minipulation
head3.parentNode; // node can be enything like comments texts etc...
head1.parentElement; // parent element

head3.previousElementSibling.previousElementSibling;//two previous sibling element
head3.nextElementSibling.nextElementSibling.nextElementSibling;//three previous sibling element
listItems[2].nextSibling.nextSibling; //this one returns not just a element but any next node like comments newLine etc...
listItems[2].previousSibling.previousSibling.previousSibling.previousSibling;
listItems[2].previousElementSibling;

list.childElementCount;//number of child elements
list.children[2];//choose which child element of an element
list.childNodes;//returns all element child plus every other nodes like comment newline etc...
list.hasChildNodes(); // Boolean wheater has a child or not
list.firstChild;
list.lastChild;
list.firstElementChild; //just elementNode
list.lastElementChild.firstElementChild.style.color = 'red';


//scroll
window.scrollTo(x,y);//scroll x & y of page
window.scrollTo(x,y);//scroll x & y of where we are now

//datasets //we can add custom attributes to html elements and access with dataset
//add data-anyName="value" to html elements
//can be accessed in js like:
event.target.dataset.anyName;

//access html audio or video properties
audvidElem.play();
audvidElem.pause();
audvidElem.duration();//returns in seconds
audvidElem.currentTime();//in seconds
audvidElem.playBackRate();






