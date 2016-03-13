'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 function initializePage() {
   console.log("Javascript connected! - myListing.js");
   /*
   var houseCard = document.getElementById("listing");
   if (document.contains(houseCard)){
    document.getElementById('query-result').innerHTML="<h3>Results that match your query:</h3>";
  }else{
    document.getElementById('query-result').innerHTML = "<h3>No results match your query</h3><p>EuroFugees services are currenlty available to the following cities:</p><ul><li>Berlin</li><li>Munich</li></ul><p>Please limit your inqueries to only these cities.";
    console.log("found no results");
 }*/
}

function registerID(id){
	console.log("selectedListingID = "+id);
	localStorage.setItem('selectedListingID', id);
}

function checkForDeletions(listingId){
  console.log('got passed the listingID ' + listingId);
  var listingToSkip = parseInt(localStorage.getItem('skipNumber'));
  console.log('got here 1 ' + listingToSkip );
  if (listingToSkip === listingId){
    console.log('got here 2' );
    document.getElementById('listing-result').innerHTML = "<h3>You have no listings<h3>";
  }
}





