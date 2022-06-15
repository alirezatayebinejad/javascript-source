// with DOM we can minipulate web page elements

// get elements
let h1Elem = document.getElementById('title');
let liElems = document.getElementsByClassName('list-item');
let listItems = document.getElementsByTagName('li');
let firstListItem = document.querySelector('#box');
let ulItems = document.querySelectorAll('.list-item');
let inputElement = document.getElementById('input');
//get & set attribute
h1Elem.getAttribute('class');
h1Elem.setAttribute('id','about');
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
ulElem.append(newLiItem);//this
ulElem.appendChild(newLiItem);//or this

//events
/*
    add onclick="funcName()" attribute to html element
    oneclick is an event and the function will execute if user click on this element
*/






