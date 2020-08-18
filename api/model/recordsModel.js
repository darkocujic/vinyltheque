const models = require('../../models')
const { Op } = require("sequelize");

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

const getAllRecords = async ({ page, limit, order, search, sort }) => {

    page  = page  || 1;
    order = order.toUpperCase() || 'ASC';
    // sort  = 'album';
    sort  = sort  || 'artist';
    search = search ? `%${ search }%` : '%%';
    limit = limit || 12;

    console.log(search)

    let records = await models.record.findAndCountAll({
        where: {
            [Op.or]: [
                { album: {[Op.like]: search} },
                { year: {[Op.like]: search} },
                { tags: {[Op.like]: search} }
            ]
        },
        include: [
            {
                model: models.artist,
                where: {
                    // TODO: fix search, OR artist.artist LIKE
                    [Op.or]: [
                        { artist: {[Op.like]: search} }
                    ]
                }
            }
        ],
        offset: (parseInt(page) - 1) * parseInt(limit),
        limit: parseInt(limit),
        order: sort == 'artist' ? [[models.artist, sort, order]] : [[sort, order]]
    })
    // TODO: implement order and sort -> respective for included artists

    return {
        count: records.count,
        records: records.rows.map(record => record.dataValues)
    }
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