var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if(req.method == 'GET' && req.url == '/') {
        res.setHeader('Content-type', 'text/plain');
        res.end('Welcome to homepage');
    } else if(req.method == 'GET' && req.url == '/about') {
        res.setHeader('Conent-type', 'text/html');
        res.end('<h2>this is all about NodeJS</h2>')
    } else if(req.method == 'POST' && req.url == '/about') {
        res.setHeader('Conent-type', 'application/json');
        res.end(`{message: this is a post request}`);
    }
}

server.listen(5000, () => {
    console.log('server listening on port 5k');
})
