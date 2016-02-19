var housingData = require('../housing.json');

exports.view = function(req, res){
	res.render('list-your-space', housingData);	
};