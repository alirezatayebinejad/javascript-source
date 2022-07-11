//AJAX - Asynchronous Javascript And XML
/*
to get data from backend without refreshing webpage
like creating an onblure event on an input to check availability of a username
with connecting to server and database without refreshing the page
*/

//API - Application programming interface
/*
api is how two application communicates to eachother with requests
like requesting to backend from frontend to get list of users or products or any data.

http methods:
C -> Create -> Post
R -> Read -> Get
U -> Update -> Put
D -> Delete -> Delete

example: 
backend programmer create an api with address of: serverURL/api/users
frontend programmer use this api to get users from backend

*/

//JSON - JavaScript Object Notation
/*
this is an open data interchange format that is both human and machine-readable.
Despite the name JavaScript Object Notation, JSON is independent of any programming language
and is a common API output in a wide variety of applications.

when we get and send data between frontend and backend with API these datas should be in JSON

must create a name.json file like in this folder
in json we can use: strings, objects, array, number, bool and null

watch user.json file to see how it is written
*/
let users = [
  {
    id: 1,
    username: "Amin",
    password: 1010,
  },
  {
    id: 2,
    username: "Amir",
    password: 0000,
  },
  {
    id: 1,
    username: "Ali",
    password: 1122,
  },
];

JSON.stringify(users); //this code change the users array to a JSON code - we do this before sending this data to serverside with help of api

let aJsonData =
  '[{"id": 1,"username": "ali","password": 1212},{"id": 2,"username": "amin","password": 1212}]';

JSON.parse(aJsonData); //now with this we change json to javascript readable data