var housingData = require('../../housing.json');

exports.view = function(req, res){
	//console.log(housingData);

	// get variables from request query
	var city = req.query.city.toLowerCase();
	var occupants = req.query.occupants;
	var maxArea = 45 + ((occupants-1)*15);
	var cost = parseInt(req.query.cost);

	// print passed results
	console.log("The passed city is: "+ city);
	console.log("The passed occupants is: "+ occupants);
	console.log("The Max area allowed  is: "+ maxArea);
	console.log("The passed cost is: "+ cost);


	var housingDataLength = housingData.length;
	var searchResults = [];

	for (i = 0; i < housingDataLength; i++) {

		// Get variables of each listing from json file
    	var listingCity = housingData[i].city.toLowerCase();
    	var listingArea = housingData[i].area;
    	var listingCost = housingData[i].cost;

    	console.log('The city of listing #' + i +' is: '+listingCity);
    	console.log('The cost of listing #' + i +' is: '+listingCost);
    	console.log('The area of listing #' + i +' is: '+listingArea);
    	if (listingCity === city){
    		console.log("passed city");
    		if (listingCost <= cost){
    			console.log("passed cost");
    			if (listingArea <= maxArea){
    				console.log("passed cost AND ALL TESTS");
    				searchResults.push(housingData[i]);
    			}
    		}
    	}
	}

		res.render('search/all-listingsVB', {
		'house': searchResults, 'searchQuery':{"city":city, "occupants":occupants, "cost":cost}});
};