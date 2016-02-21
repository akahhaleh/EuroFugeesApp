'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected! - landing.js");

	var userLoggedIn = localStorage.getItem('userLoggedIn');
	if(userLoggedIn !== "false" && userLoggedIn !== "true"){
		console.log("userLoggedIn is not defined yet")
    	userLoggedIn = "false";
    	localStorage.setItem('userLoggedIn', userLoggedIn);
    };
}