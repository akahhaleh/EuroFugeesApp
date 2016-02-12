exports.view = function(req, res){
	res.render('listing', {
	"housing": [
		{
			"id": "1",
			"title": "Nice view in safe area",
			"type": "Shared",
			"bed": "1",
			"bath": "1",
			"cost": "€ 500",
			"city": "Berlin",
			"availability": "5/2/2016",
			"description": "Spacious and bright, this remodeled unit located on the 2nd floor in a gated complex. Granite tile floors, large wall-to-wall closet in bedroom, built-in storage in the bathroom.",
			"image1": "/img/pictures/img1.PNG",
			"image2": "/img/pictures/img2.PNG",
			"image3": "/img/pictures/img3.PNG",
			"phone": "(999) - 999-9999",
			"email": "email@example.com"	
		}    	
	]
  });
};