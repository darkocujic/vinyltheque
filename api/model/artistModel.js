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

Artist.getArtistByName = (artist) => {
    return new Promise((resolve, reject) => {
        sql.query(
            'SELECT * FROM artists WHERE artist=?',
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

Artist.getArtistById = (id) => {
    return new Promise((resolve, reject) => {
        sql.query(
            'SELECT * FROM artists WHERE id=?',
            [id],
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

Artist.getAllArtists = () => {
    return new Promise((resolve, reject) => {
        sql.query(
            'SELECT * FROM artists',
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