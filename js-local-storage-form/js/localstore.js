"use strict";

(function(){

  const myName = document.getElementById("my-name"); 
  const getName = document.getElementById("getName");
  const userName = document.getElementById("userName"); 
  let nameStored = localStorage.getItem('name');
  
  if(nameStored) {
    console.log(`Name on page load: ${nameStored}`);
    // If there's a name in localStorage, use it:
    myName.innerText = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // Use a placeholder if no name in localStorage:
    myName.innerText = "stranger";
    console.log(`No name stored`);
  }

  function greetUser() {
    event.preventDefault();
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
    // Gets the name the user entered:
    nameStored = userName.value;
    
    // Shows the name in "my-name":
    myName.innerText = nameStored;
    
    // Puts the name into localStorage:
    localStorage.setItem('name', nameStored);
    
    console.log(`New name stored: ${nameStored}`);
  }

  getName.addEventListener("submit", greetUser);

}());
