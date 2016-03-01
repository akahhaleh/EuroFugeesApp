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
	$('#refineSearchApply').click(refineSearchApplyClicked);
}

// Function that lets refine search panel slide
function refineSearchClicked(e){
	$("#fadedPanel").slideToggle("slowly");

}

function refineSearchApplyClicked(e){
	e.preventDefault();
	console.log("refine clicked");

	// Get refine form values
	var oFormObject = document.forms['refine-form'];
	var city = oFormObject.elements["refine-city"].value;
	var occupants = oFormObject.elements["refine-occupants"].value;
	var cost = oFormObject.elements["refine-cost"].value;
	var pets = oFormObject.elements["refine-pets"].value;
	var children = oFormObject.elements["refine-children"].value;
	var smoking = oFormObject.elements["refine-smoking"].value;
	var availability = oFormObject.elements["refine-availability"].value;

	// Call function to get listing information from JSON file
	$.get("refine-search/"+city+"/"+occupants+"/"+cost+"/"+pets+"/"+children+"/"+smoking+"/"+availability, updateSearchResultsAfterRefine);
}

function registerID(id){
	console.log("selectedListingID = "+id);
	localStorage.setItem('selectedListingID', id);
}

function updateSearchResultsAfterRefine(result){
	console.log("refined search -- and result is "+result);
}