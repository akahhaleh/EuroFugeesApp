var housingData = require('../housing.json');
var localesData = require('../locales.json');
var refugeesData = require('../refugees.json');

exports.view = function(req, res){
	console.log(housingData);
	console.log(localesData);
	console.log(refugeesData);

	res.render('login');
};