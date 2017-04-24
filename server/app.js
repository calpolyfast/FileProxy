const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const cookieSession = require('cookie-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const routes = require('./routes/index');

const app = express();

const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env === 'development';

app.use(express.static('public'));

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));


// passport
// app.use(express.session({ secret: 'anything' }));
app.use(cookieSession({
  keys: ['anthony'],
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', routes);

// passport config
const userModel = require('./models/user');

passport.use(new LocalStrategy(
  (username, password, done) => {
    if (!userModel.authenticate(password)) {
      return done(null, false);
    }
    return done(null, userModel.user);
  }));
passport.serializeUser((user, done) => {
  done(null, JSON.stringify(user));
});
passport.deserializeUser((user, done) => {
  done(null, JSON.parse(user));
});

/// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      title: 'error',
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: 'error',
  });
});


module.exports = app;