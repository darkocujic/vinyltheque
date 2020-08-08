const models = require('../../models')

const addRecord = (body, artistId) => {
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

const getAllRecords = async () => {
    let records = await models.record.findAll({
        include: [
            {
                model: models.artist
            }
        ]
    })

    return records.map(record => record.dataValues)
}

const getRecordById = (id) => {
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

const deleteRecordById = (id) => {
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

module.exports = {
  addRecord,
  deleteRecordById,
  getAllRecords,
  getRecordById
};