"use strict";

// A simple array of the names --------------------
let getFirstNames = localStorage.getItem("localStorageNames").split(',');



// JSON format: an array of objects ---------------
let getFullNames = JSON.parse(localStorage.getItem("localStoragefullNames"));



// JSON format: an array of nested objects --------      
const contactDetails = document.getElementById("contacts");
let getContacts = JSON.parse(localStorage.getItem("localStoragecontacts"));

function parseContact(item) {
  let contact = `
  <li>
    <strong>${item.firstName} ${item.secondName}</strong>, email: <a href="mailto:${item.email}">${item.email}</a>
  </li>`;
  return contact;
}

contactDetails.innerHTML = getContacts.map(parseContact).join('');
