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
		localStorage.setItem('skipSignUp', 'true');
		console.log("User is logged in");
	} else {
		localStorage.setItem('skipSignUp', 'false');
		console.log("User is not logged in");
	}

	var skipSignUp = localStorage.getItem('skipSignUp');
	if (skipSignUp === 'true'){
		localStorage.setItem('skipSignUp', 'true');
		localStorage.setItem('listingProcess','false');
		document.entireHomeForm.action ="/list-your-space-2";
		document.privateRoomForm.action ="/list-your-space-2";
	}else{
		localStorage.setItem('skipSignUp', 'false');
		localStorage.setItem('listingProcess','true');
		document.entireHomeForm.action ="/sign-up";
		document.privateRoomForm.action ="/sign-up";
	}
}