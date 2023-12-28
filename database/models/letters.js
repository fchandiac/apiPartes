
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Letters extends Model { }
    Letters.init({
        folio: DataTypes.INTEGER,
        year: DataTypes.INTEGER,
        matter: DataTypes.STRING,
        recipient: DataTypes.STRING,
        job_title_id: DataTypes.INTEGER,
        department_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        attachment_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Letters',
        underscored: true
    })
    return Letters
}