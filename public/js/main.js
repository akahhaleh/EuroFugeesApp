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

	$('.help-topic a > h3').click(addHelpAnswer);
  $('.faq-item > a > h3').click(toggleFAQItem);
}

function addHelpAnswer(e) {
	console.log("working");
	e.preventDefault();

  $(this).parent().siblings('p').slideToggle("slow");
  $(this).children('span').toggleClass('fa-angle-double-right').toggleClass('fa-angle-double-down');
}

function toggleFAQItem(e) {
	e.preventDefault();

  $(this).parent().siblings('p').slideToggle("slow");
  $(this).children('span').toggleClass('fa-angle-double-right').toggleClass('fa-angle-double-down');
}