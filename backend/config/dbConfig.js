const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '127.0.0.1', 
    user: 'root', 
    password: 'Juanda014', 
    database: 'clientesdb',
    port: 3306
});

module.exports = pool;
