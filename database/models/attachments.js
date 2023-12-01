'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Attachments extends Model { }
    Attachments.init({
        url: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Attachments',
        underscored: true
    })
    return Attachments
}