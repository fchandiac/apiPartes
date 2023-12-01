'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Departments extends Model { }
    Departments.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Departments',
        underscored: true
    })
    return Departments
}

