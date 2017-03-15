module.exports = function (sequelize, DataTypes) {
    var myModel = sequelize.define("Role",
            {
                role_name: DataTypes.STRING,
                slug: DataTypes.STRING,
                is_active: DataTypes.INTEGER,
            },
            {
                tableName: 'roles',
                classMethods: {
                    method1: function (req, res) {
                        myModel.findAll().then(function (results) {
                            res(results);
                        });
                    },
                    getAllValues: function (where, res) {
                        myModel.findAll({where: where}).then(function (results) {
                            res(results);
                        });
                    }
                }
            }
    );

    return myModel;
};


//module.exports.login = function (sequelize, DataTypes) {
//    console.log('module.exports.login');
//};
