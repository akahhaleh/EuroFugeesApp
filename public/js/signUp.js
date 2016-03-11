'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected! - signUp.js");
	var listingProcess = localStorage.getItem('listingProcess');
}

function onsubmitform(e){
	var fn =  document.getElementById("first-name").value;
    var ln =  document.getElementById("last-name").value;
    var email =  document.getElementById("email").value;
    var password =  document.getElementById("password").value;
    var phone =  document.getElementById("telephone").value;

	//oFormObject = document.forms['sign-up-form'];
	localStorage.setItem('user-firstName',fn);
	localStorage.setItem('user-lastName',ln);
	localStorage.setItem('user-email',email);
	localStorage.setItem('user-password',password);
	localStorage.setItem('user-phone',phone);
	localStorage.setItem('userLoggedIn', "true");

	var listingProcess = localStorage.getItem('listingProcess');
	console.log("the process is " + listingProcess);
	if (listingProcess === "true"){
		document.signUpForm.action ="/list-your-space-2";
		localStorage.setItem('listingProcess','false');
	} else {
		document.signUpForm.action ="/";

	}
}