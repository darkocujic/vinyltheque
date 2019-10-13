const mysql = require('mysql');

const sql = mysql.createConnection({
    host: process.env.JAWSDB_URL,
    user: process.env.JAWSDB_USER,
    password: process.env.JAWSDB_PASS,
    database : process.env.JAWSDB_DB
});

sql.connect((err) => {
    if (err) throw new Error('SQL error');
});

module.exports = sql;