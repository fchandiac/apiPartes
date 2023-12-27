
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Mails extends Model { }
    Mails.init({
        folio: DataTypes.INTEGER,
        year: DataTypes.INTEGER,
        matter: DataTypes.STRING,
        external: DataTypes.BOOLEAN,
        sender: DataTypes.STRING,
        date: DataTypes.DATE,
        mail_reference_id: DataTypes.INTEGER,
        department_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        attachment_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Mails',
        underscored: true
    })

    return Mails


}