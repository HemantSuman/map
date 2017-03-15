var db = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'miami@123',
    database: 'map'
};


var facebook = {
    clientID: '206866863088403',
    clientSecret: 'b163694920e5a3fbde5ecf5c0fe17736',
    callbackURL: 'http://acadonia.planetwebsolution.com:4001/auth/facebook/callback',
    successRedirect: '/dashboard',
    failureRedirect: '/'
};


var google = {
    clientID: '906308791031-3pncpjn5bvjjc3qbpaq6p4p53bfo7ft5.apps.googleusercontent.com',
    clientSecret: 'j_k85dd8IkXXx4yk_s4vFL01',
    callbackURL: 'http://acadonia.planetwebsolution.com:4001/auth/google/callback',
    successRedirect: '/dashboard',
    failureRedirect: '/'
};


var mail = {
from:"support@lofaco.com",
config:"smtps://hemant.suman%40planetwebsolution.com:hemant1234@smtp.gmail.com"
};

var bbb = {
//url:"http://192.168.100.172/bigbluebutton/",
url:"http://203.100.77.134/bigbluebutton/",
key:"91d041360369b58d74834b8f37e60dbc"
};

module.exports.db = db;
module.exports.facebook = facebook;
module.exports.google = google;
module.exports.mail = mail;
module.exports.bbb = bbb;