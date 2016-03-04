var tutorialTopics = require('../tutorial.json');

exports.view = function(req, res){
	console.log(tutorialTopics);
	res.render('faqs', tutorialTopics);
};