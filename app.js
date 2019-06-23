const express = require('express');
const app = express();

const obj = {};

// app.post('/user', function (req, res) {
    
//     res.status(200).json();
// });

// app.put('/user', function (req, res) {
//     res.status(200).json();
// });

app.get('/user', function (req, res) {
    console.log(req);
    console.log(req.headers);
    res.status(200).json();
});

app.get('/user/:id', function (req, res) {
    console.log(req);
    console.log(req.params);
    res.status(200).json();
});

app.get('/users', function (req, res) {
    console.log(req);
    console.log(req.query);
    res.status(200).json();
});

// app.delete('/user', function (req, res) {
//     res.status(200).json();
// });

module.exports = app;