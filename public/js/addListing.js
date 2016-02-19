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
	//$("#entireHomeBtn").unbind().click(entireHomeClicked);
	//$("#privateRoomBtn").unbind().click(privateRoomClicked);

	// get local storage variables about user
	var listingProcess = localStorage.getItem('listingProcess');
	var userFirstName = localStorage.getItem('user-firstName');
	var userEmail = localStorage.getItem('user-email');
	var userPhone = localStorage.getItem('user-phone');

	// get local storage variables about listing
	var city = localStorage.getItem('city');
	var numOfBeds = localStorage.getItem('numOfBeds');
	var numOfBaths = localStorage.getItem('numOfBaths');
	var numOfOccupants = localStorage.getItem('numOfOccupants');


	// Display user name in header
	document.getElementById('greetingUser').innerHTML = "Congrats "+userFirstName+"! Your listing has been submitted";

}

function privateRoomClicked(e){
	var housingType = 'private';
	localStorage.setItem('type', housingType);
	$("#privateRoomPanel").slideToggle("slowly");
}

function onsubmitform(e){
	document.listingYourSpace2Form.action ="/add-listing";	
}