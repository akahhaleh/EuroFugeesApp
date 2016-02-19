'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected! - list-your-space-2.js");
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
	document.getElementById('greetingUser').innerHTML = "Welcome "+userFirstName+". Let's wrap up your listing.";
	$("#listYourSpace2Panel").slideDown("slow");

	// fill out hidden form fields
	var oFormObject = document.forms['listingYourSpace2Form'];
	oFormObject.elements["city"].value = city;
	oFormObject.elements["bed"].value = numOfBeds;
	oFormObject.elements["bath"].value = numOfBaths;
	oFormObject.elements["occupants"].value = numOfOccupants;
	oFormObject.elements["email"].value = userEmail;
	oFormObject.elements["phone"].value = userPhone;

}

function privateRoomClicked(e){
	var housingType = 'private';
	localStorage.setItem('type', housingType);
	$("#privateRoomPanel").slideToggle("slowly");
}

function onsubmitform(e){
	document.listingYourSpace2Form.action ="/add-listing";	
}