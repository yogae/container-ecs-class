const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./routes/users');

//body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended: false}));
//body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

app.get('/health', function (req, res) {
    res.status(200).end();
});

app.use('/users', users);

// not found 404 error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    return res.status(status).json(err.message);
});

module.exports = app;