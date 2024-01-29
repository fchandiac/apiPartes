'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Classifications extends Model { }
    Classifications.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'classifications',
        underscored: true
    })
    return Classifications
}