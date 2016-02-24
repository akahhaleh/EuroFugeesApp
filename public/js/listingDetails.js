'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected! - listingDetails.js");

	// Get listing id from local sotrage
	var listingID = localStorage.getItem('selectedListingID');

	// Call function to get listing information from JSON file
	$.get("listing/"+listingID, addListingInfo)
	console.log("Getting info for listing ID = " + listingID);

	
	// Call function to add info to page


	/*
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
	*/


}

function addListingInfo(result){
	console.log("JSON file returned: "+ result);

	var i=1;

	while (typeof result['image'+i] != 'undefined'){
		console.log (result['image'+i])
		document.getElementById("image"+i).src = result['image'+i];
		i++;
	}

	var projectHTML = '<div class="house"><h3>'
					  +result['title']+'</h3>'
					  +'<div class="top-info"><p class="cost2">Cost: '+result['cost']+'</p>'
					  +'<p class="city">Location: ' + result['city']+'</p>'
					  +'<p class="availability">Available on: '+result['availability']+'</p>'
					  +'</div>'
					  +'<div class="basic-info"><h4>Basic Information</h4>'
					  +'<p class="bed">type: '+result['type']+'</p>'
					  +'<p class="bed">Bed: '+result['bed']+'</p>'
					  +'<p class="bath">Bath: '+result['bath']+'</p></div>'
					  +'<div class="Description"><h4>Description</h4>'
					  +'<p>'+result['description']+'</p></div>'
					  +'<div class="contact"><h4>Host Contact info</h4>'
					  +'<p class="phone">Phone number: '+result['phone']+'</p>'
					  +'<p class="email">email address: '+result['email']+'</p>'
					  +'</div></div>';


	//var projectID = $(this).closest('.details');
	$('.listings-description').html(projectHTML);
}





