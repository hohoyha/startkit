var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('home');
});

router.get('/about', function(req, res){
    res.render('about', data.getTour());
});

exports = router;