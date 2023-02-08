
// We wanted to make a function that creates a button that makes the website turn into dark mode
//To do this we created a function called darkmode and linked it to the button in html
function darkMode() {
  var element = document.body;
  //Use toggle method to go back and forth between light and dark mode
  element.classList.toggle("dark-mode");
 };
 