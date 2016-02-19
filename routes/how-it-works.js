var housingData = require('../housing.json');
var localesData = require('../locales.json');
var refugeesData = require('../refugees.json');
var tutorialTopics = require('../tutorial.json');

exports.view = function(req, res){
  res.render('how-it-works', tutorialTopics);
};