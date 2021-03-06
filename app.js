var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var passport = require('passport');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var index = require('./routes/index');
var users = require('./routes/users');
var admin_users = require('./routes/admin/admin_users');
var admin_categories = require('./routes/admin/admin_categories');
var admin_listings = require('./routes/admin/admin_listings');
//var admin_countries = require('./routes/admin/admin_countries');
var flash = require('express-flash')
var app = express();
require('./config/passport')(passport);
// require('./config/adminpassport')(adminPassport);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("layout extractScripts", true);
app.use(expressLayouts);
var env = require('./config/env');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var sessionStore = new MySQLStore(env.db);
app.use(session({
    secret: 'hemantSumanNatProjectAdminTheme',
    store: sessionStore,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// app.use(adminPassport.initialize({ userProperty: "admin" }));
// app.use(adminPassport.session());

app.locals.site = {
    logoName: "Nat",
    logoUrl: "/front/assets/img/logo.png",
    siteTitle: "Nat",
    pageTitle: "Nat",
    author: "Nat",
    description: "Nat",
    page: 10,
    theme: 'skin-blue sidebar-mini',
    logo: '',
    copyRight: '© 2016 Nat. All rights reserved.',
    version: '1.0',
}
app.use(flash());

app.use('/', index);
app.use('/users', users);
//app.use('/admin', admin_homes);

app.use('/admin', admin_users);
app.use('/admin/categories', admin_categories);
app.use('/admin/listings', admin_listings);
//app.use('/admin/countries', admin_countries);




passport.use('facebook', new FacebookStrategy({
    clientID: fenv.facebook.clientIDD,
    clientSecret: env.facebook.clientSecret,
    callbackURL: env.facebook.callbackURL
},
// facebook will send back the tokens and profile
function (access_token, refresh_token, profile, done) {
    // asynchronous
    process.nextTick(function () {

        // find the user in the database based on their facebook id
        User.findOne({'id': profile.id}, function (err, user) {

            // if there is an error, stop everything and return that
            // ie an error connecting to the database
            if (err)
                return done(err);

            // if the user is found, then log them in
            if (user) {
                return done(null, user); // user found, return that user
            } else {
                // if there is no user found with that facebook id, create them
                var newUser = new User();

                // set all of the facebook information in our user model
                newUser.fb.id = profile.id; // set the users facebook id                 
                newUser.fb.access_token = access_token; // we will save the token that facebook provides to the user                    
                newUser.fb.firstName = profile.name.givenName;
                newUser.fb.lastName = profile.name.familyName; // look at the passport user profile to see how names are returned
                newUser.fb.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                // save our user to the database
                newUser.save(function (err) {
                    if (err)
                        throw err;

                    // if successful, return the new user
                    return done(null, newUser);
                });
            }
        });
    });
}));
//http://stackoverflow.com/questions/26037755/where-to-place-common-functions-in-express-js
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err);
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
