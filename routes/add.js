var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here

	console.log(data);
	res.render('add', data);

	
	reqName = req.query.name;
	reqDescription = req.query.description;
	
	var text = '{"name": "'+reqName+'","description": "'+reqDescription+'","imageURL": "http://lorempixel.com/400/400/people/"}';

	console.log("text object includes:", text);
	var newFriend = JSON.parse(text);
	
	data["friends"].push(newFriend);
 }