
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Records extends Model { }
    Records.init({
        year: DataTypes.INTEGER,
        folio: DataTypes.INTEGER,
        document_type: DataTypes.STRING,
        action: DataTypes.STRING,
        user_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Records',
        underscored: true
    })
    return Records
}