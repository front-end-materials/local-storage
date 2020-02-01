(function(){

  const myName = document.getElementById("my-name"); 
  const getName = document.getElementById("get-name");
  const userName = document.getElementById("user-name"); 
  let nameStored = localStorage.getItem('name');
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    // Displays the name in the console at this stage:
    console.log(`Name on page load: ${nameStored}`);
    myName.innerText = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerText = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting(ev) {
    ev.preventDefault();
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
    
    // Displays the name in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
  }

  getName.addEventListener("submit", PerformGreeting);

}());
