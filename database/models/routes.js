'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Routes extends Model { }
    Routes.init({
        name: DataTypes.STRING,
        url: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Routes',
        underscored: true
    })
    return Routes
}