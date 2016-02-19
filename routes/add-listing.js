var housingData = require('../housing.json');

exports.view = function(req, res){

	var id = (Math.random())*10;
	var title = (typeof req.query.title !=='undefined')?req.query.title:" ";
	var type = (typeof req.query.occupants !=='undefined')?req.query.occupants:0;
	var bed = (typeof req.query.bed !=='undefined')?req.query.bed:0;
	var bath = (typeof req.query.bath !=='undefined')?req.query.bath:0;
	var cost = (typeof req.query.cost !=='undefined')?req.query.cost:0;
	var city = (typeof req.query.city !=='undefined')?req.query.city:" ";
	var availability = (typeof req.query.availability !=='undefined')?req.query.availability:"today";
	var description = (typeof req.query.description !=='undefined')?req.query.description:"today";
	var image1 = (typeof req.query.image1 !=='undefined')?req.query.image1:0;
	var phone = (typeof req.query.phone !=='undefined')?req.query.phone:"(999) - 999-9999";
	var email = (typeof req.query.email !=='undefined')?req.query.email:"email@example.com";
	
	//console.log("We logged: city= "+city+" #beds= "+numOfBeds+" #baths= "+numOfBaths+" #occupants= "+numOfOccupants);

	res.render('add-Listing', {housingData} );	

	var text = '{"id": "'+id+'","title": "'+title+'","type": "'+type+'","bed": "'+bed+'","bath": "'+bath+'","cost": "€ '+cost+'","city": "'+city+'","availability": "'+availability+'","description": "'+description+'","image1": "'+image1+'","phone": "'+phone+'","email": "'+email+'"}';

	console.log("text object includes:", text);
	var newListing = JSON.parse(text);
	
	housingData["housing"].push(newListing);
};