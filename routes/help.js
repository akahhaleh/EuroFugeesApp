var helpQuestions = require('../help.json');

exports.view = function(req, res){
	res.render('help', helpQuestions);
};