const http = require('http');
const app = require('../app');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('Hello nodejs');
    res.end();
});

server.listen(3000);