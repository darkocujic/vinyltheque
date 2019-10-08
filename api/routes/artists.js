const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: `got all artists`
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: `posted an artist`
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        message: `got artist ${id}`
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
