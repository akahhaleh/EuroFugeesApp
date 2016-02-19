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

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
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
	var text = '{"name": "Amr","description": "whatever","imageURL": "http://lorempixel.com/400/400/people/"}';
	if (loginStatus === "true"){
		document.entireHomeForm.action ="/list-your-space-2";
		document.privateRoomForm.action ="/list-your-space-2";
	} else {
		var listingProcess = true;
		localStorage.setItem('listingProcess', listingProcess)
		document.entireHomeForm.action ="/sign-up";
		document.privateRoomForm.action ="/sign-up";

	}	
}