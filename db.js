const mysql = require('mysql');

const con = mysql.createConnection(process.env.DATABASE_URL);

con.connect(function(err) {
  if (err) throw err;
  console.log("DB connected");
});

module.exports = con;