var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session); 
var flash = require('connect-flash');
var partials = require('express-partials');

var  bRoutes = require('./routes/backsystem/index');
var  fRoutes = require('./routes/blog/index');

var app = express();


app.use(flash());
app.use(partials());


app.use(session({
  secret: '#sddjswjdhww22ygfw2233@@@%#$!@%Q!%*12',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
     url: 'mongodb://localhost:27017/blogDB'
  })
}));


app.use(function(req, res, next){
  
  res.locals.user = req.session.user;
  res.locals.post = req.session.post;
  var error = req.flash('error');
  res.locals.error = error.length ? error : null;
 
  var success = req.flash('success');
  res.locals.success = success.length ? success : null;
  next();
});


app.use(express.static(path.join(__dirname, 'views/blog/dist/')));
app.use('/source', express.static(path.join(__dirname, 'views/blog/source/')));



// backsystem view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/admin', express.static(path.join(__dirname, 'public')));


// backsystem route
app.use('/admin', bRoutes);

// blog route
app.use('/', fRoutes);



// error handlers

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
