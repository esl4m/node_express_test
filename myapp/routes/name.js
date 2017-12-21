var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('name', { title: 'Enter Movie Name' });
});

router.post('/', function(req, res, next) {
    // res.render('name', { title: 'Enter Movie Name' });
    console.log(req.body.name);
    res.send(req.body.name);
});

module.exports = router;
