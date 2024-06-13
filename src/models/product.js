const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Product extends Model {}
Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
}, { sequelize, modelName: 'product' });

module.exports = Product;
