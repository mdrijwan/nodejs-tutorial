var http = require('http');

// simple server
http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end("Hello to the Node Server")
    }

    // showing html
    if (req.url === '/html') {
        var fs = require('fs')
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        var html = fs.createReadStream(__dirname + '/index.html').pipe(res)
    }

    // JSON output
    if (req.url === '/json') {
        var object = require('./greet/greetings.json')
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(JSON.stringify(object))
    }
}).listen(3000, '127.0.0.1');

console.log("the server is running")