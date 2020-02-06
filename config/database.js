const mysql = require('mysql');
let connection;


    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'posdb'
 });



connection.connect();

module.exports = connection;