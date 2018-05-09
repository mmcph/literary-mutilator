let div = document.getElementById("container");
let paraOne = document.getElementById("one");
let paraTwo = document.getElementById("two");
let paraThree = document.getElementById("three");
let paraThreeSave = document.getElementById("three").innerText;
let paraFour = document.getElementById("four");


paraOne.addEventListener("click", function(){

	paraOne.style.color = "red";

});

paraOne.addEventListener("dblclick", function(){

	paraOne.style.fontSize = "20px";

});

paraTwo.addEventListener("mouseenter", function(){

	let newTxt = paraTwo.innerText;
	paraThree.innerText = newTxt;

});

paraTwo.addEventListener("mouseleave", function(){

	paraThree.innerText = paraThreeSave;

});


div.addEventListener("click", function() {

	let orig = paraFour.innerText;
	let newTxt = orig.replace("cliche", "hipster");
	paraFour.innerText = newTxt;

});

