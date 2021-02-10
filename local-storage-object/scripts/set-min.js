"use strict";

// A simple array ---------------------------------
const names = ['thom', 'salimah', 'dave', 'fania'];

localStorage.setItem("localStorageNames", names);



// JSON format: an array of objects --------------
const fullNames = [
  {thom: 'Thom Corah'},
  {salimah: 'Salimah Mohamed'},
  {dave: 'Dave Everitt'},
  {fania: 'Fania Raczinski'}
]

localStorage.setItem("localStoragefullNames", JSON.stringify(fullNames));



// JSON format: an array of nested objects--------
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
    email: 'deveritt@dmu.ac.uk'
  }
]

localStorage.setItem("localStoragecontacts", JSON.stringify(contacts));
