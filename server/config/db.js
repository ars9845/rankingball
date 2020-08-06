const mysql = require('mysql');

const db = mysql.createPool({
    host: '192.168.0.82',
    port: '3306',
    user: 'rbtest',
    password: 'rbtest1234',
    database: 'dev_db'
});

module.exports = db;