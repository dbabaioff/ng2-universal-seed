var express   = require('express');
var ng2engine = require('angular2-universal-preview').ng2engine;

console.log(ng2engine);

// Angular 2
var App = require('./dist/bundle').App;

var app = express();

// Express View
app.engine('.ng2.html', ng2engine);
app.set('views', __dirname);
app.set('view engine', 'ng2.html');


// static files
app.use(express.static(__dirname));


app.use('/', function(req, res) {
    res.render('index', {App: App});
});

app.listen(3000, function() {
    console.log('Listen on http://localhost:3000');
});