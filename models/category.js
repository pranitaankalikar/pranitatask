const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//id, name , password, phone number, role

const Category = sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    categoryname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    status: Sequelize.BOOLEAN
});

module.exports = Category;
