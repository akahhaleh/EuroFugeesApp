'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected! - all-listingVB.js");
	$("#refineSearch").unbind().click(refineSearchClicked);

}

// Function that lets refine search panel slide
function refineSearchClicked(e){
	$("#fadedPanel").slideToggle("slowly");

}


function registerID(id){
	console.log("selectedListingID = "+id);
	localStorage.setItem('selectedListingID', id);
}