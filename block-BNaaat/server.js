var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if(req.method == 'GET' && req.url == '/') {
        res.setHeader('Content-type', 'text/plain');
        res.end('Welcome to homepage');
    }
}

server.listen(5000, () => {
    console.log('server listening on port 5k');
})
