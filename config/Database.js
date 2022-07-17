const mysql = require('mysql2');
const Sequelize = require('sequelize');

const HOST = 'localhost';
const DB = 'mvp_v1';
const USER = 'root';
const PASSWORD = '';

// Open the connection to MySQL server
const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
});
  
// Run create database statement
connection.query(
    `CREATE DATABASE IF NOT EXISTS ${DB}`,
    function (err, results) {
        console.log(results);
        console.log('Error : ', err);
    }
);

// Connect DB by Sequelize 
const sequelize = new Sequelize( DB, USER, PASSWORD, {
    host: HOST,
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// connecting models to DB
db.comments = require('../models/CommentModel.js')(sequelize, Sequelize);

module.exports = db;