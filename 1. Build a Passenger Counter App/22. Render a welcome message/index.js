// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-El");
// Create two variables (name & greeting) that contains your name
let aName = "Clark";
// and the greeting we want to render on the page
let aGreeting = "Welcome back, ";

// Render the welcome message using welcomeEl.innerText
    welcomeEl.innerText = aGreeting + aName;