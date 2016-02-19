
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// basics
var landing = require('./routes/landing');
var signUp = require('./routes/sign-up');
var login = require('./routes/login');
var howItWorks = require('./routes/how-it-works');
var help = require('./routes/help');
// listings
var search = require('./routes/search');
var allListings = require('./routes/all-listings');
var listing = require('./routes/listing');
// locales
var listYourSpace = require('./routes/list-your-space');
var listYourSpace2 = require('./routes/list-your-space-2');
var addListing = require('./routes/add-listing');
// refugees
var apply = require('./routes/apply');

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

// basics pages
app.get('/', landing.view);
app.get('/sign-up', signUp.view);
app.get('/login', login.view);
app.get('/how-it-works', howItWorks.view);
app.get('/help', help.view);
// listings pages
app.get('/search', search.view);
app.get('/all-listings', allListings.view);
app.get('/listing', listing.view);
// locales pages
app.get('/list-your-space', listYourSpace.view);
app.get('/list-your-space-2', listYourSpace2.view);
app.get('/add-listing', addListing.view);
// refugees pages
app.get('/apply', apply.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
