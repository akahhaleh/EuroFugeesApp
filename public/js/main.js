'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
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