'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected! - listYourSpace.js");

	$("#entireHomeBtn").unbind().click(entireHomeClicked);
	$("#privateRoomBtn").unbind().click(privateRoomClicked);
}

function entireHomeClicked(e){
	var housingType = 'entire';
	localStorage.setItem('type', housingType);
	$("#entireHomePanel").slideToggle("slowly");

}

function privateRoomClicked(e){
	var housingType = 'private';
	localStorage.setItem('type', housingType);
	$("#privateRoomPanel").slideToggle("slowly");
}

function onsubmitform(e){
	var loginStatus = localStorage.getItem('userLoggedIn');
	
	if (loginStatus === "true"){
		document.entireHomeForm.action ="/list-your-space-2";
		document.privateRoomForm.action ="/list-your-space-2";
	} else {
		var listingProcess = "true";
		localStorage.setItem('listingProcess', listingProcess)
		document.entireHomeForm.action ="/sign-up";
		document.privateRoomForm.action ="/sign-up";

	}	
}