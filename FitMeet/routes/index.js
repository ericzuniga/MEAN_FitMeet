var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FitMeet' });
});

router.get('/myprofile', function(req, res){
  res.send('this will be the profile page');
});

module.exports = router;
