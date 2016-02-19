var tutorialTopics = require('../tutorial.json');

exports.view = function(req, res){
  res.render('how-it-works', tutorialTopics);
};