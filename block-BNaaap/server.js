var http = require('http');


var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>Welcome to Altcampus</h2>')
}

server.listen(4444, () => {
    console.log('server listening on port 4444');
})