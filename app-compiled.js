'use strict';

var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');

var responseTime = require('response-time');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup

app.set('views', './views');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express['static'](path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//responseTime

app.server = http.createServer(app).listen(8000, function () {
    console.log("Server running...");
});

module.exports = app;

//# sourceMappingURL=app-compiled.js.map