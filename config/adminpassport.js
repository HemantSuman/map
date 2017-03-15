var LocalStrategy = require('passport-local').Strategy;
var models = require('../models');
// load up the user model
// var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
// var dbconfig = require('../config/db');
//var user = require('../model/User');

module.exports = function (adminPassport) {
	
    // =========================================================================
    // adminPassport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // adminPassport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    adminPassport.serializeUser(function (user, done) {
        if (typeof user.id !== 'undefined') {
            done(null, user.id);
        }
    });

    // used to deserialize the user
    adminPassport.deserializeUser(function (id, done) {
        err = '';
        user.getUserById(id, function (userData) {
            done(null, userData[0]);
        });
    });

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    adminPassport.use(
            'admin-login1',
            new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
            function (req, email, password, done) { // callback with email and password from our form
				console.log('adminPassport call ....');
				console.log(password);
                // user.getUserByEmail(email, function (userData) {
                    // console.log(userData, '2222');
                    // console.log(password + ' == ' + bcrypt.hashSync(password, null, null) + '===' + userData[0].password + '==='+userData[0]['is_active']);
                    // if (!userData.length) {
                        // req.flash('msg', 'Invalid login details');
                        // return done(null, false,'Invaild login details');
                    // }
                    // console.log('>>>>>>>>>>>>>>>>>>>>------------------------------------');

                    // if (userData[0]['is_active'] == 0) {
                        // console.log('----------------------------');
                        // req.flash('msg', 'Please activate your account');
                        // return done(null, false,'Please activate your account');
                    // }
                   console.log(userData[0],'333');
                    // if (!bcrypt.compareSync(password, userData[0].password)) {
                        // req.flash('msg', 'Invalid login details');
                        // return done(null, false,'');
                    // }
                    // return done(null, userData[0],'done');
                // });

            })
            );
};