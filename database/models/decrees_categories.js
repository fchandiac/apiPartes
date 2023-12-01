'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DecreesCategories extends Model { }
    DecreesCategories.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'DecreesCategories',
        underscored: true
    })
    return DecreesCategories
}