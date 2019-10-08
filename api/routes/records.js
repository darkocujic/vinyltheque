const express = require('express');
const router = express.Router();

const recordsModel = require('../model/recordsModel');

router.get('/', (req, res, next) => {
    sql.query('SELECT * FROM records AS r INNER JOIN artists AS a ON r.artist_id = a.id', (err, result) => {
        if (err) {
            // console.log(err);
            res.status(500).json({
                msg: "error",
                desc: "something went wrong"
            });
        } else {
            res.status(200).json({
                msg: 'success',
                res: result
            });        
        }
    });
});

router.post('/', (req, res, next) => {
    const artist = req.body.artist;
    // var artistId = '';
    
    const artistId = recordsModel.findArtistByName(artist).then((artistId) => console.log(artistId));
    // , (results) => {
    //     console.log('results in route: ', results);
    //     artistId = results.res;
    //     console.log('inside: ', artistId);
    // });
    console.log('outside: ', artistId);

    // if (artistId === '' || artistId === undefined) {
    //     sql.query('INSERT INTO artists (artist) VALUES (' + mysql.escape(artist) + ')', (err, result) => {
    //         if (err) {
    //             res.status(500).json({
    //                 msg: "error",
    //                 desc: "something went wrong on insert in POST /"
    //             });
    //         } else {
    //             artistId = result.insertId;
    //         }
    //     })
    // }

    // const record = {
    //     artistId: req.body.artistId,
    //     album: req.body.album,
    //     year: req.body.year,
    //     tags: req.body.tags
    // };

    res.status(201).json({
        msg: 'all cool for post',
        // artistId: artistId
        // record: record
    });
});

router.get('/:id', (req, res, next) => { 
    const id = req.params.id;

    res.status(200).json({
        message: `got record id ${id}`
    });
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        message: `patched record id ${id}`
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        message: `deleted record id ${id}`
    });
});

module.exports = router;