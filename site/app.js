let enterBtn = document.getElementById("enter");
let regBtn = document.getElementById("reg");
let nameField = document.getElementById("nameField");
let nameFieldInp = document.getElementById("nameFieldInp");
let nameFieldName = document.getElementById("nameFieldName");

enterBtn.onclick = function(){
	nameField.style.maxHeight = "0px"
	enterBtn.classList.add("disable")
	regBtn.classList.remove("disable")
}

regBtn.onclick = function(){
	nameField.style.maxHeight = "60px"
	regBtn.classList.add("disable")
	enterBtn.classList.remove("disable")
}