'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class JobTitles extends Model { }
    JobTitles.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'JobTitles',
        underscored: true
    })
    return JobTitles
}