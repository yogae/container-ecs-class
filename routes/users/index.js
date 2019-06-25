const express = require('express');
const router = express.Router();
const dao = require('./dao');

router.post('/', function (req, res) {
    const { name, email } = req.body;
    const result = dao.create(name, email);
    res.status(201).json(result);
});

router.get('/', function (req, res) {
    const list = dao.readMany();
    res.status(200).json(list);
});

router.get('/:id', function (req, res) {
    const { id } = req.params;
    const list = dao.readOne(Number.parseInt(id));
    res.status(200).json(list);
});

router.put('/:id', function (req, res) {
    const { id } = req.params;
    const updateBody = req.body;
    const list = dao.update(Number.parseInt(id), updateBody.name, updateBody.email);
    res.status(200).json(list);
});

router.delete('/:id', function (req, res) {
    const { id } = req.params;
    const list = dao.remove(Number.parseInt(id));
    res.status(200).json(list);
});

module.exports = router;