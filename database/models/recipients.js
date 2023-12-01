'use strict';
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Recipients extends Model { }
    Recipients.init({
        name: DataTypes.STRING,
        repository: DataTypes.BOOLEAN,
        url_repository: DataTypes.STRING,
        department_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Recipients',
        underscored: true
    })
    return Recipients
}
