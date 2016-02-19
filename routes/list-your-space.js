var housingData = require('../housing.json');
var localesData = require('../locales.json');
var refugeesData = require('../refugees.json');

exports.view = function(req, res){
<<<<<<< HEAD
	res.render('list-your-space');	
=======
	console.log(housingData);
	console.log(localesData);
	console.log(refugeesData);

	res.render('list-your-space', housingData);
>>>>>>> 8cf671ca3b55eff4b70fb5cff9d426a9e998d0dc
};