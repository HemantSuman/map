//translation module with dynamic json storage
var i18n_Validation = new (require('i18n-2'))({
    // setup some locales - other locales default to the first locale
    locales: ['en_valiation']
});

i18n_Validation.setLocale('en_valiation');
var bcrypt = require('bcrypt-nodejs');

module.exports = function (sequelize, DataTypes) {
    var myModel = sequelize.define("Listing",
            {
                category_id: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: {
                            msg: i18n_Validation.__('required')
                        }
                    }
                },
                listing_title: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: {
                            msg: i18n_Validation.__('required')
                        }
                    }
                },
                listing_keywords: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: {
                            msg: i18n_Validation.__('required')
                        }
                    }
                },
                lat: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: {
                            msg: i18n_Validation.__('required')
                        }
                    }
                },
                lng: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: {
                            msg: i18n_Validation.__('required')
                        }
                    }
                },
                is_active:DataTypes.INTEGER,
            },
            {
                tableName: 'listings',
                classMethods: {
                    associate: function (models) {
//                        var mymodelCategoryHasMany = myModel.hasMany(models.Category, {foreignKey: 'category_id', as: 'bussiness_detail'})
                    },
                    method1: function (req, res) {
                        myModel.findAll().then(function (users) {
                            res(users);
                        });
                    },
                    getAllValues: function (where, res) {
                        myModel.findAll({where: where}).then(function (results) {
                            res(results);
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
