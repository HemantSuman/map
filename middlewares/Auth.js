//var PermissionRole = require('../model/PermissionRole');

function MyModelClass() {

    this.isLogin = function (req, res, next) {
        if (req.isAuthenticated()) {

            if (req.user.is_profile_complete == 0) {
                res.redirect('/complete-profile');
            }

            if (typeof req.session.siteUser != 'undefined') {
                next();
            } else {
                res.redirect('/');
            }

        } else {
            if (req.xhr) {
                res.status(400).send({status: false, msg: 'Please login first', data: []});
            } else {
                //res.status(404).send('Page not found');   
                res.redirect('/');
            }

        }
    }


    this.isAdmin = function (req, res, next) {
		var scope_urls = ['/users/login']
		console.log(req.url);
		console.log(req.url.indexOf(scope_urls));
		if (req.url.indexOf(scope_urls) >= 0 ){
			console.log('url');
			return next();
		} 
        if (req.isAuthenticated()) {
			console.log('if');
			return next();
        } else {
			console.log('else');
            res.redirect('/admin/users/login');
        }
    }


}

module.exports = new MyModelClass();