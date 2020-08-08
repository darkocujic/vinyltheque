import { Router } from 'express';
const router = Router();

import recordsModel from '../model/recordsModel';
import { getAllArtists, addArtist, getArtistById } from '../model/artistModel';

router.get('/', (req, res, next) => {
    getAllArtists()
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

    addArtist(artist)
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

    getArtistById(id)
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

export default router;
