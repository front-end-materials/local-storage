"use strict";
/*
  In this version, console.log() statements (see shortcut 'print' line 7) track
  various values, with comments. For the essential code only, open 'get-min.js'
*/

// creates shortcut 'print' function to avoid typing "console.log()":
const print = (content) => console.log(content);



print(`A simple array from the names: ---------------------------------`);

let getFirstNames = localStorage.getItem("localStorageNames").split(",");
print(getFirstNames);
print(`getFirstNames[0] gets array item one: ${getFirstNames[0]}`);



print('\n\nJSON format, an array of objects: ---------------');

let getFullNames = JSON.parse(localStorage.getItem("localStoragefullNames"));
print(getFullNames);
print(`getFullNames[0].thom gets: ${getFullNames[0].thom}`);



print('\n\nJSON format, an array of nested objects: --------');
      
const contactDetails = document.getElementById("contacts");
let getContacts = JSON.parse(localStorage.getItem("localStoragecontacts"));
print(getContacts);
let firstContact = getContacts[0];
// check in the console that we have the data we requested above:
print(
  `${firstContact.firstName} ${firstContact.secondName}, email: ${firstContact.email}`
);


let counter = 0;
// this function wraps the value of each key-value pair in an HTML 'li' tag
// the counter (lines 45-46) just shows how many times the function is called
function parseContact(item) {
  let contact = `
  <li>
    <strong>${item.firstName} ${item.secondName}</strong>, email: <a href="mailto:${item.email}">${item.email}</a>
  </li>`;
  counter +=1;
  print(`\n\nlocalStoragecontacts ${counter}:`);
  print(contact);
  return contact;
}
// iterates through the data, calling the function above each time
contactDetails.innerHTML = getContacts.map(parseContact).join('');

/*
  You can use `map` to iterate through key-value pairs without counting, doing something 
  with each key-value pair.
    On line 53, we pass each contact object pair to the 'parseContact()' function.
  map() on MDN:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  
  join() gets the character between the nested objects (a comma).
  join('') sets the character between the nested objects to nothing.
  join() on MDN:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join -->
*/
