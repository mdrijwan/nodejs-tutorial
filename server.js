var http = require('http');

// simple server
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end("Hello to the Node Server")
}).listen(3000, '127.0.0.1');

// showing html
var fs = require('fs')
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    var html = fs.readFileSync(__dirname + '/index.html')
    res.end(html)
}).listen(3001, '127.0.0.1');

console.log("the server is running")

// JSON output
var object = require('./greet/greetings.json')
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end(JSON.stringify(object))
}).listen(3002, '127.0.0.1');

console.log("the server is running")