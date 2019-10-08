const mysql = require('mysql');
const util = require('util');

const sql = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database : "vinyltheque"
});

// sql.connect((err) => {
//     if (err) throw new Error('SQL error');
//     // sql.query('SELECT * FROM records', (err, res) => {
//     //     console.log(res);
//     // })
// });

sql.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})



sql.query = util.promisify(sql.query);

module.exports = sql;