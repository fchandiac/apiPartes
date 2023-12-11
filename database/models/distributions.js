
'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Distributions extends Model { }
    Distributions.init({
        reference_type: DataTypes.STRING,
        reference_id: DataTypes.INTEGER,
        recipient_id: DataTypes.INTEGER,
        user_update_id: DataTypes.INTEGER,
        state: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Distributions',
        underscored: true
    })
    return Distributions
}