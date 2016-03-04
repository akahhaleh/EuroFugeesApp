'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected! - add-listing.js");

	// get local storage variables about user
	var userFirstName = localStorage.getItem('user-firstName');

	// Display user name in header
	document.getElementById('greetingUser').innerHTML = "Congrats "+userFirstName+"! Your listing has been submitted";

}

function onsubmitform(e){
	document.listingYourSpace2Form.action ="/search";
}