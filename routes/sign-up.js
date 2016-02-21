exports.view = function(req, res){

	var city = (typeof req.query.city !=='undefined')?req.query.city:" ";
	var numOfBeds = (typeof req.query.bed !=='undefined')?req.query.bed:0;
	var numOfBaths = (typeof req.query.bath !=='undefined')?req.query.bath:0;
	var numOfOccupants  = (typeof req.query.occupants !=='undefined')?req.query.occupants:0;
	console.log("We logged: city= "+city+" #beds= "+numOfBeds+" #baths= "+numOfBaths+" #occupants= "+numOfOccupants);

	var text = '{"variables": [{"city" : "'+city+'","numOfBeds" : "'+numOfBeds+'","numOfBaths" : "'+numOfBaths+'","numOfOccupants" : "'+numOfOccupants+'"}]}';
	
	console.log("text object includes:", text);
	var localVariables = JSON.parse(text);

	res.render('sign-up', localVariables);
};