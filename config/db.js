var mysql = require('mysql');
var Sequelize = require('sequelize');
var env = require('../config/env');

var sequelize = new Sequelize(env.db.database, env.db.user, env.db.password, {
    host: env.db.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false, // true by default
        dateStrings:true
    },
    logging: true,
    dateStrings:true
});

module.exports = sequelize;