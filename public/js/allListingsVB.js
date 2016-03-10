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
   $('#refineSearchApply').unbind().click(refineSearchApplyClicked);
   ga('send','pageview');

   var houseCard = document.getElementById("listing");
   if (document.contains(houseCard)){ 
    document.getElementById('query-result').innerHTML="<h3>Results that match your query:</h3>";
  }else{
    document.getElementById('query-result').innerHTML = "<h3>No results match your query</h3>";
    console.log("found no results");
 }
}

// Function that lets refine search panel slide
function refineSearchClicked(e){
	$("#fadedPanel").slideToggle({
    direction: "up"
  }, 500);

	ga("send", "event", 'refineSearchButtonClicked', 'click');

}

function refineSearchApplyClicked(e){
	e.preventDefault();
	console.log("refine clicked");
	ga("send", "event", 'refineSearchApplyButtonClicked', 'click');

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

  // hide refine search when done
  $("#fadedPanel").hide(500);
  $("html, body").animate({ scrollTop: 0 }, 500);
}

function registerID(id){
	console.log("selectedListingID = "+id);
	localStorage.setItem('selectedListingID', id);
}

function updateSearchResultsAfterRefine(result){
  document.getElementById('listing-result').innerHTML='';
	var refinedResultsCount = result.length;
  console.log("found " + refinedResultsCount + " result that matched refine!")
	if (refinedResultsCount === 0){
		document.getElementById('query-result').innerHTML = "<h3>No results match your query</h3>";
		console.log("found no results");
	}else{
		document.getElementById('query-result').innerHTML="<h3>Results that match your query:</h3>";
		for (var i=0; i<refinedResultsCount; i++){
			var listingAtIndex = result[i];
			generateSearchResultCard(result[i]);
			//addListenersToSlideShow();
		}
	}
}

// BEGIN CARD CREATION

function generateSearchResultCard(listing){

  var listingID = listing['id'];
  var listingType = listing['type'];
  var listingCity = listing['city'];
  var listingTitle = listing['title'];
  var listingCost = listing['cost'];
  var listingImage1 = listing['image1'];
  var listingImage2 = listing['image2'];
  var listingImage3 = listing['image3'];
  var listingAvailability = listing['availability'];
  var listingBed = listing['bed'];
  var listingBath = listing['bath'];

  $('#listing-result').append($('<article class="listing"><section class="listing-primary-details"><header class="content"><div class="listing-tag">'+listingType+' in '+listingCity+'</div><div class="pure-u-1"><p class="offerPrice"><span class="fa fa-euro"></span> '+listingCost+'/month</p></div><h3 class="offerTitle">'+listingTitle+'</h3></header><a class="house-card listing-slideshow" href="/listing-details" onclick="registerID('+listingID+')"><figure class="show"><img id="image1" src="'+listingImage1+'" width="100%"></figure></a></section><section class="listing-secondary-details content"><div class="listing-shown"><div class="offerDateAvailable"><div class="pure-g"><div class="pure-u-1-2"><p><span class="fa fa-calendar-o"></span> Available:</p></div><div class="pure-u-1-2"><p>'+listingAvailability+'</p></div></div></div></div><div class="listing-hidden"><div class="pure-g"><div class="pure-u-1-2"><p class="placeBed">Bed: '+listingBed+'</p></div><div class="pure-u-1-2"><p class="placeBath">Bath: '+listingBath+'</p></div></div></div><a href="/listing-details" class="pure-button-primary is-full-width" onclick="registerID('+listingID+')">Go to listing <span class="fa fa-angle-double-right"></span></a></section></article>'));
}
/* OLD CODE
  //Get the parent node where the card will be added
	var listingResults = document.getElementById('listing-result');

	//Create the house card
	var listingCard = document.createElement("DIV");
    listingCard.setAttribute("class", "house");

    //Create the link to the listing
    var listingLinkToDescription = document.createElement("A");
    listingLinkToDescription.setAttribute("style", "color:white");
    listingLinkToDescription.setAttribute("class", "house-card");
    listingLinkToDescription.setAttribute("href", "/listing-details");
    listingLinkToDescription.setAttribute("onclick", "registerID("+listing['id']+")");

    //Create the title of the card
    var listingTitle = document.createElement("H3");
    listingTitle.innerHTML = listing['title'];

    //Create the slideshow
    var listingSlideshowDiv = document.createElement('DIV');
    listingSlideshowDiv.setAttribute('class','listing-slideshow');
    var imageCount = 1;

    while (typeof listing['image'+imageCount] != 'undefined'){
		console.log (listing['image'+imageCount])
		var imageFigure = document.createElement('FIGURE');
		// Check if that's the first picture in order to determine which one to show
		if (imageCount === 1){
			imageFigure.setAttribute('class','show');
		}
		var imageImg = document.createElement('IMG');
		imageImg.setAttribute('id','image'+imageCount);
		imageImg.setAttribute('width','100%');
		imageImg.setAttribute('src',listing['image'+imageCount]);
		imageFigure.appendChild(imageImg);

		// add pictures to home screen
		listingSlideshowDiv.appendChild(imageFigure);
		// incrememnt picture count
		imageCount++;
	}

	var preButton = document.createElement('SPAN');
	preButton.setAttribute('class','prev');
	preButton.innerHTML= "«";
	var nextButton = document.createElement('SPAN');
	nextButton.setAttribute('class','next');
	nextButton.innerHTML= "»";

	listingSlideshowDiv.appendChild(preButton);
	listingSlideshowDiv.appendChild(nextButton);

    //Create cost tag
    var listingCost = document.createElement("P");
    listingCost.setAttribute("class","cost");
    listingCost.innerHTML="Cost: € "+ listing['cost'];

    //Create the card-info div
    var cardInfoDiv = document.createElement('DIV');
    cardInfoDiv.setAttribute("class","card-info");

    var cardInfoBed = document.createElement('P');
    cardInfoBed.innerHTML = "Beds: "+ listing['bed'];

    var cardInfoBath = document.createElement('P');
    cardInfoBath.innerHTML = "baths: "+listing['bath'];

    var cardInfoAvailability = document.createElement('P');
    cardInfoAvailability.innerHTML = "Availability: "+listing['availability'];

    //Append card-info p tags to the parent div
    cardInfoDiv.appendChild(cardInfoBed);
    cardInfoDiv.appendChild(cardInfoBath);
    cardInfoDiv.appendChild(cardInfoAvailability);

    //Append created children to card node
    listingLinkToDescription.appendChild(listingTitle);
    listingCard.appendChild(listingLinkToDescription);
    listingCard.appendChild(listingSlideshowDiv);
    listingCard.appendChild(listingCost);
    listingCard.appendChild(cardInfoDiv);
    listingResults.appendChild(listingCard);
    
  }
  */

// END CARD CREATION

function addListenersToSlideShow(){
  var counter = 0,
  $items = document.querySelectorAll('.listing-slideshow figure'),
  numItems = $items.length;

  var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);

    [].forEach.call( $items, function(el){
      el.classList.remove('show');
    });

    $items[itemToShow].classList.add('show');
  };

  document.querySelector('.next').addEventListener('click', function() {
    counter++;
    showCurrent();
  }, false);

  document.querySelector('.prev').addEventListener('click', function() {
    counter--;
    showCurrent();
  }, false);
}




