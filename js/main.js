(function(){

console.log("SEAF Fired")
//save shortcut to button in DOM
var button = document.querySelector("#button");
var burgerCon = document.querySelector("#burgerCon");

function hamburgerMenu() {
	console.log("Click Worked")
	box3.classList.toggle("slideToggle")
	button.classList.toggle("expanded");

}

button.addEventListener("click", hamburgerMenu);

})();