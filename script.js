let div = document.getElementById("container");
let paraOne = document.getElementById("one");
let paraTwo = document.getElementById("two");
let paraThree = document.getElementById("three");
let paraThreeSave = document.getElementById("three").innerText;
let paraFour = document.getElementById("four");

// click listener changes color of first paragraph
paraOne.addEventListener("click", function(){

	paraOne.style.color = "red";

});

// doubleclick listener changes size of first paragraph
paraOne.addEventListener("dblclick", function(){

	paraOne.style.fontSize = "20px";

});

// mouse enter listener sets innerText of paragraph three to innerText of paragraph two
paraTwo.addEventListener("mouseenter", function(){

	paraThree.innerText = paraTwo.innerText;

});

// mouse leave event resets paragraph three innerText to original value
paraTwo.addEventListener("mouseleave", function(){

	paraThree.innerText = paraThreeSave;

});

// click listener on the div containing the fourth paragraph finds and replaces one instance of "cliche" within paragraph four with "hipster" per click
div.addEventListener("click", function() {

	paraFour.innerText = paraFour.innerText.replace("cliche", "hipster");

});

