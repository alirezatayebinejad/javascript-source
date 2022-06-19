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
//get attribute with .
h1Elem.id;//gets only reall html attribue/object property //can get a setted propert for html element directly in js like the code bellow //but for class we should use .className
h1Elem.NewProperty='new attribute'; 
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
//add or remove css classes
h1Elem.classList.add('classname');//adds class
h1Elem.classList.remove('classname');//removes class
h1Elem.classList.toggle('classname');//adds class if it doesnt exist removes class if it exist









