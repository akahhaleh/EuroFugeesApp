var housingData = require('../housing.json');
var localesData = require('../locales.json');
var refugeesData = require('../refugees.json');
var helpQuestions = require('../help.json');

exports.view = function(req, res){
	res.render('help', helpQuestions);
};