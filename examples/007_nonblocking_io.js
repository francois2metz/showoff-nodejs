#!/usr/bin/env node

var http = require('http')

console.log('currend pid', process.pid)

http.createServer(function (req, res) {
    console.log('from pid', process.pid)
    setTimeout(function() {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Hello World from pid '+ process.pid +'\n')
    }, 2000)
}).listen(1234)
