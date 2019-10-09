const sql = require('../../db');

const Artist = {};

Artist.addArtist = (artist) => {
    return new Promise((resolve, reject) => {
        sql.query(
            'INSERT INTO artists (artist) VALUES (?)',
            [artist],
            (err, rows, fields) => {
                if (rows === undefined) {
                    reject (new Error('err: rows is undefined'));
                } else {
                    resolve(rows);
                }
            }
        )
    });
}

Artist.getArtistIdByName = (artist) => {
    return new Promise((resolve, reject) => {
        sql.query(
            'SELECT id FROM artists WHERE artist=?',
            [artist],
            (err, rows, fields) => {
                if (rows == undefined) {
                    reject(new Error('err: rows is undefined'));
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

module.exports = Artist;