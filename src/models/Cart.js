const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Cart extends Model {}
Cart.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, { sequelize, modelName: 'cart' });

module.exports = Cart;

