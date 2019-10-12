const sql = require('../../db');

const Record = {};

Record.addRecord = (body, artistId) => {
    return new Promise((resolve, reject) => {
        sql.query(
            'INSERT INTO records (artist_id, album, img, year, tags) VALUES (?, ?, ?, ?, ?)',
            [artistId, body.album, body.img, body.year, body.tags],
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

Record.getAllRecords = () => {
    return new Promise((resolve, reject) => {
        sql.query(
            'SELECT r.id, a.artist, r.album, r.img, r.tags, r.year FROM records AS r LEFT JOIN artists AS a ON r.artist_id = a.id',
            (err, rows, fields) => {
                if (rows === undefined) {
                    reject(new Error('err: rows is undefined'));
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

Record.getRecordById = (id) => {
    return new Promise((resolve, reject) => {
        sql.query(
            'SELECT * FROM records WHERE id=?',
            [id],
            (err, rows, fields) => {
                if (rows === undefined) {
                    reject(new Error('err: rows is undefined'));
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

Record.deleteRecordById = (id) => {
    return new Promise((resolve, reject) => {
        sql.query(
            'DELETE FROM records WHERE id=?',
            [id],
            (err, rows, fields) => {
                if (rows === undefined) {
                    reject(new Error('err: rows is undefined'));
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

module.exports = Record;