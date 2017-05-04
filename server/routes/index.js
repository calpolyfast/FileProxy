const express = require('express');
const passport = require('passport');
const userModel = require('../models/user');
const s3 = require('../s3/s3');

const router = express.Router();

// isAuthenticated middleware checks whether the user is logged in
function isAuthenticated(req, res, next) {
  if (req.user === undefined) {
    res.redirect('/login');
  } else if (req.user.password === userModel.user.password) {
    next();
  } else {
    res.redirect('/login');
  }
}

/* GET file manager page. */
router.get('/', isAuthenticated, (req, res) => {
  res.render('index.html', {});
});

/* GET the files in bucket */
router.get('/files', isAuthenticated, (req, res) => {
  s3.getFilesInFolder()
    .then((data) => {
      res.json(data.Contents);
    })
    .catch((err) => {
      res.json(err);
    });
});


// Auth and login

/* GET login page. */
router.get('/login', (req, res) => {
  if (req.user) {
    res.redirect('/');
  } else {
    res.render('login.html', {});
  }
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
