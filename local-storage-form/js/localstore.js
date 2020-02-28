"use strict";

(function(){

  const myName = document.getElementById("my-name"); 
  // const getName = document.getElementById("getName");
  // const userName = document.getElementById("userName"); 
  let nameStored = localStorage.getItem('name');
  
  /*
    If there's a name in localStorage use it,
    otherwise show a placeholder:
  */
  if(nameStored) {
    console.log(`Name on page load: ${nameStored}`);
    myName.innerText = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  } else {
    myName.innerText = "stranger";
    console.log(`No name stored`);
  }

  function checkEmpty() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
  }

  function greetUser() {
    // don't reload the page
    event.preventDefault();
    
    checkEmpty();
    
    // Gets the name the user entered
    // and displays it in "my-name":
    nameStored = userName.value;
    myName.innerText = nameStored;
    
    // Puts the name into localStorage:
    localStorage.setItem('name', nameStored);
    console.log(`New name stored: ${nameStored}`);
  }

  getName.addEventListener("submit", greetUser);

}());
