#!/usr/bin/env node

var http = require('http')

var lastStatus = -1

setInterval(function() {
    http.get({host: 'duckduckgo.com'}, function(res) {
        console.log(res.statusCode)
        lastStatus = res.statusCode
    })
}, 5000)

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('last status of duckduckgo:'+ lastStatus +'\n')
}).listen(1234)
