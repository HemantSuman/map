var models = require('../../models');
var express = require('express');
var router = express.Router();
var adminAuth = require('../../middlewares/Auth');
var ImageUpload = require('../../middlewares/ImageUpload');
var async = require("async");

router.use(adminAuth.isAdmin);

/* GET users listing. */
// router.get('/', function(req, res, next) {
    // res.render('admin/home/dashboard', { title: 'Express', layout:'admin/layout/layout' });
   // res.render('admin/users/login', { title: 'Express' });
 // res.send('respond with a resource 12121');
// });

router.get('/users/add', function(req, res, next) {
	
	async.parallel({
		countries: function(callback) {
			var where={'is_active':1}
			models.Country.getAllValues(where, function(data){
				callback(null, data);
			});
		},
		roles: function(callback) {
			var where={'is_active':1}
			models.Role.getAllValues(where, function(data){
				callback(null, data);
			});
		}
	}, function(err, results) {
		// console.log(results.roles);
		res.render('admin/users/add', { results: results, layout:'admin/layout/layout' });
		// results is now equals to: {one: 1, two: 2}
	});

});

router.get('/', function(req, res, next) {
	var where={'is_active':1}
	models.Country.getAllValues(where,function(results){
		res.render('admin/countries/index', {results:results,layout:'admin/layout/layout'})
	});
});
router.post('/users/create', function(req, res, next) {
		
		ImageUpload.uploadFile(req, res, function (err) {
			if (err) {
				console.log(err);
				//res.send({status: false, msg: err, data: []});
			} else {
				models.User.saveAllValues(req.body, function(results){
					if(results.status){
						req.flash('success_messages', 'sucessssss');
						res.status(200).send({status:true, url:'/admin/users'});
					} else {
						//console.log(results);
						res.status(400).send({results:results.errors});
					}
				});
			}

		});
});

module.exports = router;
