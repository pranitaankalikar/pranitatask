const Sequelize = require('sequelize');
const sequelize = require('../util/database');



const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    productname: {
        type: Sequelize.STRING,
        
        
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    amount: {
        type: Sequelize.DOUBLE
    }
    
    
});

module.exports = Product;
