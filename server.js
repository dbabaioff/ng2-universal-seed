var express   = require('express');
var ng2engine = require('angular2-universal-preview').ng2engine;

// Angular 2
var App = require('./dist/server/app').App;

var app = express();

// Express View
app.engine('.ng2.html', ng2engine);
app.set('views', __dirname);
app.set('view engine', 'ng2.html');


// static files
app.use(express.static(__dirname));


app.use('/', function(req, res) {
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
        return;
    }

    //res.render('index', {App: App, enableProdMode: true});
    res.render('index', {App: App});
});

app.listen(3000, function() {
    console.log('Listen on http://localhost:3000');
});