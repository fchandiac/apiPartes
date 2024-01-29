'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Decrees extends Model { }
    Decrees.init({
        folio: DataTypes.INTEGER,
        year: DataTypes.INTEGER,
        type: DataTypes.INTEGER,
        matter: DataTypes.STRING,
        date: DataTypes.DATE,
        attachment_id: DataTypes.INTEGER,
        decrees_category_id: DataTypes.INTEGER,
        department_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        third: DataTypes.BOOLEAN, 
        sensitive: DataTypes.BOOLEAN, 
        classification_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Decrees',
        underscored: true
    })
    return Decrees
}


