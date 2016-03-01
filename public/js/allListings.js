'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected! - all-listing.js");
	var city = location.search.substr(6);
	console.log(city);
}


function registerID(id){
	console.log("selectedListingID = "+id);
	localStorage.setItem('selectedListingID', id);
}