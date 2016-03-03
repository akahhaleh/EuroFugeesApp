var helpQuestions = require('../help.json');

exports.view = function(req, res){
	console.log(helpQuestions);

	res.render('help', helpQuestions);
};