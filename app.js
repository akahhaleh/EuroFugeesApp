
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// basics
var index = require('./routes/index');
var howItWorks = require('./routes/how-it-works');
var help = require('./routes/help');
// listings
var listing = require('./routes/listing/listing');
var addListing = require('./routes/listing/add-listing');
var listYourSpace = require('./routes/listing/list-your-space');
var listYourSpace2 = require('./routes/listing/list-your-space-2');
var listingDetails = require('./routes/listing/listing-details');
// search
var search = require('./routes/search/search');
var searchVB = require('./routes/search/searchVB');
var allListings = require('./routes/search/all-listings');
var allListingsVB = require('./routes/search/all-listingsVB');
var refineSeachVB = require('./routes/search/refine-search');
// users
var signUp = require('./routes/user/sign-up');
var login = require('./routes/user/login');
var apply = require('./routes/user/apply');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// basics
app.get('/', index.view);
app.get('/help', help.view);
app.get('/how-it-works', howItWorks.view);
// listings
app.get('/add-listing', listing/addListing.view);
app.get('/list-your-space', listing/listYourSpace.view);
app.get('/list-your-space-2', listing/listYourSpace2.view);
app.get('/listing/:id', listing/listing.listingInfo);
app.get('/listing-details', listing/listingDetails.view);
// search
app.get('/search', search/search.view);
app.get('/searchVB', search/searchVB.view);
app.get('/all-listings', search/allListings.view);
app.get('/all-listingsVB', search/allListingsVB.view);
app.get('/refine-search/:city/:occupants/:cost/:pets/:children/:smoking/:availability', search/refineSeachVB.updateResults);
// user
app.get('/sign-up', user/signUp.view);
app.get('/login', user/login.view);
app.get('/apply', user/apply.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
