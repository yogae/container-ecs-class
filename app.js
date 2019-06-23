const express = require('express');
const app = express();

app.get('/health', function (req, res) {
    res.status(200).end();
});

module.exports = app;