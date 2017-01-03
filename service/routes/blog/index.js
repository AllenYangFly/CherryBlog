var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("1");
    var blogPath = '../../../';
    res.sendFile(path.join(__dirname,  blogPath,'app/dist/index.html'));
});

module.exports = router;
