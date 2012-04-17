#!/usr/bin/env node

var http = require('http')

http.get({host: 'duckduckgo.com'}, function(res) {
    console.log(res.statusCode)
    console.log(res.headers)
})
