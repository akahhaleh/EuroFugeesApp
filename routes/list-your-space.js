var housingData = require('../housing.json');
var data = require('../data.json');

exports.view = function(req, res){
	res.render('list-your-space', housingData);	
};