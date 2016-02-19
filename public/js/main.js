'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

  var counter = 0,
  $items = $('.listing-slideshow figure'),
  numItems = $items.length;

  var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);
    $items.removeClass('show');
    $items.eq(itemToShow).addClass('show');
  };

  $('.next').on('click', function(){
    counter++;
    showCurrent();
  });

  $('.prev').on('click', function(){
    counter--;
    showCurrent();
  });

})

function initializePage() {

	$('.help-topic a').click(addHelpAnswer);
	$('.tutorial-topic a').click(addTutorialAnswer);
}

function addHelpAnswer(e) {
	console.log("working"); 	 	
	e.preventDefault();
}

function addTutorialAnswer(e) {
	e.preventDefault();
}