const mysql = require('mysql');

const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "vinyltheque"
});

sql.connect((err) => {
    if (err) throw new Error('SQL error');
});

module.exports = sql;