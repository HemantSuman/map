//translation module with dynamic json storage
var i18n_Validation = new (require('i18n-2'))({
    // setup some locales - other locales default to the first locale
    locales: ['en_valiation']
});

i18n_Validation.setLocale('en_valiation');
var bcrypt = require('bcrypt-nodejs');

module.exports = function (sequelize, DataTypes) {
    var myModel = sequelize.define("User",
            {
                email: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: {
                            msg: i18n_Validation.__('Please_Enter', i18n_Validation.__('email'))
                        },
                        isUnique: function (value, next) {
                            var self = this;
                            myModel.find({
                                where: {email: value},
                                attributes: ['id']
                            })
                                    .then(function (data) {
                                        // reject if a different user wants to use the same email
                                        if (data && Number(self.id) !== data.id) {
                                            return next(i18n_Validation.__('AlreadyExist', i18n_Validation.__('email')));
                                        }
                                        return next();
                                    })
                                    .catch(function (err) {
                                        return next(err);
                                    });

                        },
                    }
                },
                name: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: {
                            msg: i18n_Validation.__('Please_Enter', 'Name')
                        },
                    }
                },
                password: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: {
                            msg: i18n_Validation.__('Please_Enter', 'Password')
                        },
                    }
                },
                role_id: {
                    type: DataTypes.INTEGER,
                },
                profile_image: {
                    type: DataTypes.STRING,
                    validate: {
                        isLongEnough: function (val) {
                            var ext1 = val.split('.').pop();
                            var validExt = ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG', 'gif', 'GIF'];
                            if (validExt.indexOf(ext1) < 0) {
                                throw new Error(i18n_Validation.__('Please_Select', 'Valid image'))
                            }
                        }
                    }
                },
            },
            {
                tableName: 'users',
                classMethods: {
                    associate: function (models) {
                        //var mymodelBussinessHasOne = myModel.hasOne(models.BussinessDetail, {foreignKey: 'user_id', as: 'bussiness_detail'})
                    },
                    method1: function (req, res) {
                        myModel.findAll().then(function (users) {
                            res(users);
                        });
                    },
                    getAllValues: function (req, res) {
                        myModel.findAll({where: req}).then(function (results) {
                            res(results);
                        });
                    },
                    getAllValuesPaging: function (where, res) {
                        myModel.findAndCountAll({
                            where: where,
                            offset:3,
                            limit:3,
                        }).then(function (results) {
                            console.log(results);
                            res(results);
                        });
                    },
                    getUserByEmail: function (email, res) {
                        myModel.findOne({where: {email: email}}).then(function (users) {
                            res(users);
                        });
                    },
                    getUserById: function (id, res) {
                        myModel.findOne({where: {id: id}}).then(function (users) {
                            res(users);
                        });
                    },
                    saveAllValues: function (values, res) {
                        // console.log(values.BussinessDetail);
                        var mymodelBussinessHasOne = myModel.hasOne(myModel.BussinessDetail, {foreignKey: 'user_id', as: 'bussiness_detail'})
                        myModel.create(values, {include: [mymodelBussinessHasOne]}).then(function (results) {
                            results.status = 1;
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

                        values.password = bcrypt.hashSync(values.password, null, null);
                    }
                }
            }
    );

    return myModel;
};


//module.exports.login = function (sequelize, DataTypes) {
//    console.log('module.exports.login');
//};
