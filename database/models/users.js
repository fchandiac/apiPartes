'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Users extends Model { }
    Users.init({
        mail: DataTypes.STRING,
        pass: DataTypes.STRING,
        profile_id: DataTypes.INTEGER,
        city_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
        dni: DataTypes.STRING,
        phone: DataTypes.STRING,
        state: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Users',
        underscored: true
    })
    return Users
}

