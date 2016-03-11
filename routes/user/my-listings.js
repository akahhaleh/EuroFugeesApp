var housingData = require('../../housing.json');

exports.view = function(req, res){

	var housingDataLength = housingData.length;
	var searchResults = [];

	for (i = 0; i < housingDataLength; i++) {

		// Get variables of each listing from json file
    	var owner = housingData[i].owner;

    	console.log('The owner of listing #' + i +' is: '+owner);
    	if (owner === "true"){
			console.log("passed owner test");
			searchResults.push(housingData[i]);
    	}
	}

	res.render('user/sign-up', searchResults);
};