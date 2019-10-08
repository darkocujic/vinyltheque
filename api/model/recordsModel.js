const mysql = require('mysql2/promise');

const sql = require('../../db');

const Record = {};
Record.findArtistByName = async (artist) => {
    // console.log('artist', artist);
    await sql.query('SELECT * FROM artists WHERE artist=' + mysql.escape(artist), (err, result) => {
        if (err) {
            console.log(err);
            return({
                msg: "error",
                desc: "something went wrong"
            });
        } else {
            // console.log('result', result);

            return result;

            // return new Promise((resolve, reject) => {
                
            // });

            // return({
            //     msg: 'success',
            //     res: result[0].id
            // });
        }
    });
}

module.exports = Record;