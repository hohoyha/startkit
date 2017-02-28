var express = require('express');
var exphbs  = require('express3-handlebars');
var index = require('./routes/index');

var app = express();
//var router = app.Router();


app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

var hbs = exphbs.create({
    defaultLayout:'main',
    extname: '.hbs'
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use( function(req, res, next){
    res.locals.showTests = app.get('env') !== 'production' && 
    req.query.test === '1';
    next();
});


var data = require('./tempData');

app.use(function(req, res, next){
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.sample = data.getData();
    next();
});

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about', data.getTour());
});

app.get('/tours/hood-river', function(req, res){
	res.render('tours/hood-river');
});
app.get('/tours/oregon-coast', function(req, res){
	res.render('tours/oregon-coast');
});
app.get('/tours/request-group-rate', function(req, res){
	res.render('tours/request-group-rate');
});

//app.use('/', index );


// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('errors/404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('errors/500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});



