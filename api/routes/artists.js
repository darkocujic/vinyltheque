const express = require('express');
const router = express.Router();

const recordsModel = require('../model/recordsModel');
const artistModel = require('../model/artistModel');

router.get('/', (req, res, next) => {
    artistModel
        .getAllArtists()
        .then((result) => {
            res.status(200).json({
                error: false,
                msg: 'got all artists',
                artists: result
            });
        })
        .catch((err) => {
            console.log('err: ', err);
        });
});

router.post('/', (req, res, next) => {
    const artist = req.body.artist;

    artistModel
        .addArtist(artist)
        .then((result) => {
            const artistId = result.insertId;

            res.status(201).json({
                error: false,
                msg: 'added artist',
                artists: artistId
            });

        })
        .catch((err) => {
            console.log('err: ', err);
        })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    artistModel
        .getArtistById(id)
        .then((result) => {
            res.status(200).json({
                error: false,
                message: `got artist id ${id}`,
                artists: result
            });
        })
        .catch((err) => {
            console.log('err: ', err);
        });
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        message: `patched artist ${id}`
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        message: `deleted artist ${id}`
    });
});

module.exports = router;
