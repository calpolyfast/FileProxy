const express = require('express');
const s3 = require('../s3/s3');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  s3.getFileURL('ascii-logo.png').then((url) => {
    res.render('index.html', { name: 'anthony lackey', url });
  });
});

/* POST auth */
router.post('/auth', (req, res) => {
  res.send('auth');
});

module.exports = router;
