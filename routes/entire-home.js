var housingData = require('../housing.json');
var localesData = require('../locales.json');
var refugeesData = require('../refugees.json');

exports.view = function(req, res){
	console.log(housingData);
	console.log(localesData);
	console.log(refugeesData);

	reqCity = req.query.city;
	reqBath = req.query.bath;
	
	//var text = reqName+" "+reqBath;
	res.render('entire-home', {housingData, reqCity, reqBath});
};

