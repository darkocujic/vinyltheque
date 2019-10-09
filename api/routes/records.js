const express = require('express');
const router = express.Router();

const recordsModel = require('../model/recordsModel');
const artistModel = require('../model/artistModel');

router.get('/', (req, res, next) => {
    recordsModel
        .getAllRecords()
        .then((result) => {
            res.status(200).json({
                error: false,
                msg: 'got all records',
                records: result
            });
        })
        .catch((err) => {
            console.log('err: ', err);
        });
});

router.post('/', (req, res, next) => {
    const artist = req.body.artist;
   
    artistModel
        .getArtistIdByName(artist)
        .then((result) => {
            let artistId;
            if (result.length) {
                artistId = result[0].id;
            };
            if (artistId !== undefined) {
                recordsModel
                    .addRecord(req.body, artistId)
                    .then((result) => {
                        res.status(201).json({
                            msg: 'record added'
                        });
                    })
                    .catch((err) => {
                        console.log('err: ', err);
                    })
            } else {
                artistModel
                    .addArtist(artist)
                    .then((result) => {
                        const artistId = result.insertId;

                        recordsModel
                            .addRecord(req.body, artistId)
                            .then((result) => {
                                res.status(201).json({
                                    msg: 'record added'
                                });        
                            })
                            .catch((err) => {
                                console.log('err: ', err);
                            })
                    })
                    .catch((err) => {
                        console.log('err: ', err);
                    })
            }
        })
        .catch((err) => {
            console.log('err: ', err);
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