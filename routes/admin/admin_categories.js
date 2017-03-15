var models = require('../../models');
var express = require('express');
var router = express.Router();
var adminAuth = require('../../middlewares/Auth');
var ImageUpload = require('../../middlewares/ImageUpload');
var async = require("async");

router.use(adminAuth.isAdmin);

var viewDirectory = 'categories';
var modelName = 'Category';

/* GET users listing. */
router.get('/', function (req, res, next) {
    models[modelName].getAllValues(req, function (results) {
        console.log(results);
        res.render('admin/' + viewDirectory + '/index', {results: results, layout: 'admin/layout/layout'});
    });
    //res.render('admin/categories/index', {title: 'Express', layout: 'admin/layout/layout'});
});


router.get('/add', function (req, res, next) {

    async.parallel({
//        roles: function (callback) {
//            var where = {'is_active': 1}
//            models.Role.getAllValues(where, function (data) {
//                callback(null, data);
//            });
//        }
    }, function (err, results) {
        res.render('admin/' + viewDirectory + '/add', {results: results, layout: 'admin/layout/layout'});
    });

});

router.post('/create', function (req, res, next) {

    ImageUpload.uploadFile(req, res, function (err) {
        if (req.files.length) {
            req.body.profile_image = req.files[0].filename;
        }
        if (err) {
            res.send({status: false, msg: err, data: []});
        } else {

            var modelBuild = models[modelName].build(req.body);
            var errors = [];
            async.parallel([
                function (callback) {

                    modelBuild.validate().then(function (err) {
                        if (err != null) {
                            errors = errors.concat(err.errors);
                            callback(null, errors);
                        } else {
                            callback(null, errors);
                        }

                    });
                }], function (err) {

                if (errors.length == 0) {

                    models[modelName].saveAllValues(req, function (results) {
                        if (results.status) {
                            res.status(200).send({status:true, url:'/admin/'+viewDirectory});
                        } else {
                            res.status(400).send({status: false, msg: ' saved d failed', data: results.errors});
                        }
                    });

                } else {
                    res.status(400).send({status: false, msg: ' saved d failed', data: errors});
                }
            });
        }

    });
    console.log(req.body);
});

module.exports = router;
