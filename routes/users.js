var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  console.log('--------------- NEW REQUEST -----------------');
  console.log(new Date().toLocaleString());
  //console.log(req.cookies);
  console.log(req.headers)

  //res.end(req.headers)

  //res.send('respond with a resource');
});

module.exports = router;
