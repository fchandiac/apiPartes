'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class MailReferences extends Model { }
    MailReferences.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'MailReferences',
        underscored: true
    })
    return MailReferences
}