"use strict";

// A simple array ---------------------------------
let getFirstNames = localStorage.getItem("localStorageNames").split(',');



// JSON format: an array of objects ---------------
let getFullNames = JSON.parse(localStorage.getItem("localStoragefullNames"));



// JSON format: an array of nested objects --------      
const contactDetails = document.getElementById("contacts");
let getContacts = JSON.parse(localStorage.getItem("localStoragecontacts"));

function parseContact(item) {
  let contact = `<li>${item.firstName} ${item.secondName}, email: ${item.email}</li>`;
  return contact;
}

contactDetails.innerHTML = getContacts.map(parseContact).join('');
