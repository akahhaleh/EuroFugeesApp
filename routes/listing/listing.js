var housingData = require('../housing.json');

exports.listingInfo = function(req, res) { 

	var listingID = req.params.id;

	/*
	if (projectID == "random") {
		projectID = Math.floor(Math.random() * projects.length) + 1;
	} else {
		projectID = parseInt(projectID);
	}
	*/
	listingID = parseInt (listingID);

  	var listing = housingData[listingID]; // of by one, our first project has index 0
  	res.json(listing);
}