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
    order = order ? order.toUpperCase() : 'ASC';
    sort  = sort  || 'artist';
    search = search ? `%${ search }%` : '%%';
    limit = limit || 12;

    console.log(search)

    let records = await models.record.findAndCountAll({
        where: {
            [Op.or]: [
                { album: {[Op.like]: search} },
                { year: {[Op.like]: search} },
                { tags: {[Op.like]: search} },
                { '$artist.artist$': {[Op.like]: search}}
            ]
        },
        include: [
            {
                model: models.artist,
            }
        ],
        offset: (parseInt(page) - 1) * parseInt(limit),
        limit: parseInt(limit),
        order: sort == 'artist' ? [[models.artist, sort, order]] : [[sort, order]]
    })

    return {
        count: records.count,
        records: records.rows.map(record => record.dataValues)
    }
}

const getAllTags = async () => {
    let tags = await models.record.findAll({
        attributes: ['tags']
    });

    return tags.map(tag => tag.dataValues)
}

const sortAndCountTags = (tags) => {
    let tagValue = [];
    let tagCount = [];
    let counted = [];
    var allTags = [];
    
    // TODO: maybe optimise this some time in your career

    tags.map(tag => tag.tags.split(',')).forEach(tagArray => allTags = [...allTags, ...tagArray])

    allTags.forEach((tag, i) => {
        if (tagValue.indexOf(tag.trim()) == -1) {
            tagValue.push(tag.trim());
            tagCount.push(1);
        } else {
            // let index = tagValue.indexOf(tag.trim().replace(/ /g, '-'));
            let index = tagValue.indexOf(tag.trim());
            tagCount[index] = tagCount[index] + 1;
        }
    })

    tagValue.forEach((tag, i) => {
        counted.push({ value: tag, count: tagCount[i]})
    })

    return counted;
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
  getRecordById,
  getAllTags,
  sortAndCountTags
};