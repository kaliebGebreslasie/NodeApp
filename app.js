var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var jwt = require('express-jwt');
var cors = require('cors');



var index = require('./routes/index');
var users = require('./routes/users');
var clubsNearBy = require('./routes/clubsNearBy');
var startRide = require('./routes/startRide');
// <<<<<<< HEAD
var club = require('./routes/club');
var addclub = require('./routes/addclub');
var EventPost = require('./routes/EventPost');
var AnnouncementPost = require('./routes/AnnouncementPost');
var joinclub = require('./routes/joinClub');


// =======
// var joinclub = require('./routes/joinClub');
// >>>>>>> fe506d21905ec2cbc253373e02330a29317dfa00
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', index);
app.use('/users', users);
app.use('/addclub', addclub);
app.use('/EventPost', EventPost);
app.use('/announcmentpost', AnnouncementPost);
app.use('/club', club);
app.use('/startRide', startRide);

var authCheck = jwt({
  secret: new Buffer('FSrxB0sCo2tHVsPEwQ5J1-iuzkK4X_wZm7KDSXJsEjRGzdF4f_JdQIsgENuwmAbz'),
  audience: 'fuAkz6gQf9qEkPxRNdacG9xpsT6Zy05R'
});
var users = [
  { id: 1, name: 'Todd Motto', image: 'image-1.jpg' },
  { id: 2, name: 'Brad Green', image: 'image-2.jpg' },
  { id: 3, name: 'Igor Minar', image: 'image-3.jpg' }
];
app.use(function(req, res,next) {
res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

app.get('/api/users', authCheck,function(req, res) {



  res.json(users);
});
app.use('/api/joinClub',authCheck, joinclub);
app.use('/api/clubsNearBy',authCheck,clubsNearBy );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(4000);
console.log('Listening on http://localhost:4000');
module.exports = app;
