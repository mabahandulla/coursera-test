(function(window){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
/*
	I wrote some code that displays the result directly to the page.
	Just for fun :)
*/
const divContainer = document.querySelector('.output');

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === "j") {
    byeSpeaker.speak(names[i]); //printing to console
	
    divContainer.appendChild(document.createElement('p'));
    divContainer.lastElementChild.textContent = "Good bye " + names[i]; //printing to page
  } else {
    helloSpeaker.speak(names[i]); //printing to console

    divContainer.appendChild(document.createElement('p'));
    divContainer.lastElementChild.textContent = "Hello " + names[i]; //printing to page
  }
}

})(window);