
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// basics
var landing = require('./routes/landing');
var about = require('./routes/about');
var faqs = require('./routes/faqs');
var support = require('./routes/support');
var settings = require('./routes/settings');
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
var myListings = require('./routes/user/my-listings');

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
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// basics
app.get('/', landing.view);
app.get('/about', about.view);
app.get('/faqs', faqs.view);
app.get('/support', support.view);
app.get('/settings', settings.view);
// listings
app.get('/add-listing', addListing.view);
app.get('/list-your-space', listYourSpace.view);
app.get('/list-your-space-2', listYourSpace2.view);
app.get('/listing/:id', listing.listingInfo);
app.get('/listing-details', listingDetails.view);
// search
app.get('/search', search.view);
app.get('/searchVB', searchVB.view);
app.get('/all-listings', allListings.view);
app.get('/all-listingsVB', allListingsVB.view);
app.get('/refine-search/:city/:occupants/:cost/:pets/:children/:smoking/:availability', refineSeachVB.updateResults);
// user
app.get('/sign-up', signUp.view);
app.get('/login', login.view);
app.get('/apply', apply.view);
app.get('/my-listings', myListings.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
