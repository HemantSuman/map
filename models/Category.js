//translation module with dynamic json storage
var i18n_Validation = new (require('i18n-2'))({
    // setup some locales - other locales default to the first locale
    locales: ['en_valiation']
});

i18n_Validation.setLocale('en_valiation');
var bcrypt = require('bcrypt-nodejs');
//var models = require('../models');

module.exports = function (sequelize, DataTypes) {
    var myModel = sequelize.define("Category",
            {
                category_name: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: {
                            msg: i18n_Validation.__('required')
                        },
                        isUnique: function (value, next) {
                            
                            var self = this;
                            myModel.find({
                                where: {category_name: value},
                                attributes: ['id']
                            })
                                    .then(function (data) {
                                        // reject if a different user wants to use the same email
                                        if (data && Number(self.id) !== data.id) {
                                            return next(i18n_Validation.__('AlreadyExist', i18n_Validation.__('name')));
                                        }
                                        return next();
                                    })
                                    .catch(function (err) {
                                        return next(err);
                                    });

                        },
                    }
                },
                is_active:DataTypes.INTEGER,
            },
            {
                tableName: 'categories',
                classMethods: {
                    associate: function (models) {
                        var mymodelCategoryHasMany = myModel.hasMany(sequelize.models.Listing, {foreignKey: 'category_id'});
                    },
                    method1: function (req, res) {
                        myModel.findAll().then(function (users) {
                            res(users);
                        });
                    },
                    getAllValues: function (where, res) {
                        myModel.findAll({where: where, 
                        include : [{model : sequelize.models.Listing}]}).then(function (results) {
                            res(results);
                        });
                    },
                    getUserByEmail: function (email, res) {
                        myModel.findOne({where: {email: email}}).then(function (users) {
                            res(users);
                        });
                    },
                    getValueById: function (id, res) {
                        myModel.findOne({where: {id: id}}).then(function (results) {
                            res(results);
                        });
                    },
                    saveAllValues: function (req, res) {
                        // console.log(values.BussinessDetail);
//                        var mymodelBussinessHasOne = myModel.hasOne(myModel.BussinessDetail, {foreignKey: 'user_id', as: 'bussiness_detail'})
                        myModel.create(req.body).then(function (results) {
                            req.flash('type_messages', 'success');
                            req.flash('messages', 'Added successfully!');
                            results.status = true;
                            res(results);
                        }).catch(function (err) {
                            var errors = err;
                            errors.status = false;
                            res(errors);
                        });
                    }
                },
                hooks: {
                    beforeCreate: function (values, options) {
                        if (typeof values.is_active === 'undefined') {
                            values.is_active = 0;
                        }
                    }
                }
            }
    );

    return myModel;
};


//module.exports.login = function (sequelize, DataTypes) {
//    console.log('module.exports.login');
//};
