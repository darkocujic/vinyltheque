import { Router } from 'express';
const recordRoutes = Router();
const { getAllRecords } = require('../model/recordsModel')
// import { getAllRecords, addRecord, getRecordById, deleteRecordById } from '../model/recordsModel';
// import { getArtistByName, addArtist } from '../model/artistModel';

recordRoutes.get('/', async (req, res) => {
    let records;

    try {
        records = await getAllRecords();
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            errMsg: 'Can\'t read from DB.'
        })
    }

    if (records) {
        return res.status(200).json({
            error: false,
            records
        })
    }
});

recordRoutes.post('/', (req, res, next) => {
    // console.log(req.body);
    const artist = req.body.artist;
   
    getArtistByName(artist)
        .then((result) => {
            let artistId;
            if (result.length) {
                artistId = result[0].id;
            };
            if (artistId !== undefined) {
                addRecord(req.body, artistId)
                    .then((result) => {
                        res.status(201).json({
                            msg: 'record added'
                        });
                    })
                    .catch((err) => {
                        console.log('err: ', err);
                    })
            } else {
                addArtist(artist)
                    .then((result) => {
                        const artistId = result.insertId;

                        addRecord(req.body, artistId)
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

recordRoutes.get('/:id', (req, res, next) => { 
    const id = req.params.id;

    getRecordById(id)
        .then((result) => {
            res.status(200).json({
                error: false,
                message: `got record id ${id}`,
                record: result
            });
        })
        .catch((err) => {
            console.log('err: ', err);
        });
});

recordRoutes.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    
    res.status(200).json({
        message: `patched record id ${id}`
    });
});

recordRoutes.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    deleteRecordById(id)
        .then((result) => {
            res.status(200).json({
                message: `deleted record id ${id}`
            });
        })
        .catch((err) => {
            console.log('err: ', err);
        });
});

export default recordRoutes;