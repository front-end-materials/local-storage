"use strict";
/*
  this version uses console.log() statements with shortcut 'print', below,
  to track how the JavaScript is working, and has some explanatory comments.
  For the essential code only, open get-min.js
*/

// creates shortcut 'print' function to avoid typing "console.log()":
const print = (content) => console.log(content);

// adds a visual divider in the browser console
print('A simple array ---------------------------------');

const names = ['thom', 'salimah', 'dave', 'fania'];
// before setting, you could check the items exist in locaStorage:
// if (!localStorage.getItem("localStorageNames")){ --line 17 here-- }
localStorage.setItem("localStorageNames", names);
let getFirstNames = localStorage.getItem("localStorageNames").split(',');
print(getFirstNames);
print(getFirstNames[1]);



print('\n\nJSON format: an array of objects --------------');

const fullNames = [
  {thom: 'Thom Corah'},
  {salimah: 'Salimah Mohamed'},
  {dave: 'Dave Everitt'},
  {fania: 'Fania Raczinski'}
]
localStorage.setItem("localStoragefullNames", JSON.stringify(fullNames));
let getFullNames = JSON.parse(localStorage.getItem("localStoragefullNames"));

print(getFullNames);
print(getFullNames[0].thom);



print('\n\nJSON format: an array of nested objects--------');
      
const contacts = [
  {
    firstName: 'Thom',
    secondName: 'Corah',
    email: 'tcorah@dmu.ac.uk'
  },
  {
    firstName: 'Fania',
    secondName: 'Raczinski',
    email: 'fania.raczinski@dmu.ac.uk'
  },
  {
    firstName: 'Salimah',
    secondName: 'Mohamed',
    email: 'salimah.mohamed@dmu.ac.uk'
  },
  {
    firstName: 'Dave',
    secondName: 'Everitt',
    email: 'dave.everitt@dmu.ac.uk'
  }
]
localStorage.setItem("localStoragecontacts", JSON.stringify(contacts));
let getcontacts = JSON.parse(localStorage.getItem("localStoragecontacts"));

print(getcontacts);
let firstContact = getcontacts[0];
print(`${firstContact.firstName} ${firstContact.secondName}, email: ${firstContact.email}`);

/*
  JSON.stringify takes a JavaScript data object and turns it into a string:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

  JSON.parse does the reverse:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
*/
