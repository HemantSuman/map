var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    models.Category.getAllValues(req, function(data){
        console.log(data[0]);
        res.render('front/index', {data: data, layout:'front/layout/layout'});
    });
    
});

router.post('/login', function (req, res, next) {
 	models.User.method1(req, function(data){
		console.log(data);
	});
     // models.User.findAll().then(function (users) {
        // console.log('users');
        // console.log(users);
       // res.render('index', {
           // title: 'Sequelize: Express Example',
           // users: users
       // });
    // });
    //models.User.login(req, res);
    res.send('gggggggggg');
});


module.exports = router;
