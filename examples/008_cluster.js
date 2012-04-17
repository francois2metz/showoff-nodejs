#!/usr/bin/env node

var cluster = require('cluster')
var http = require('http')
var numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('death', function(worker) {
    console.log('worker ' + worker.pid + ' died')
  })
} else {
  // Worker processes have a http server.
  http.Server(function(req, res) {
    console.log('Hello from pid', process.pid)
    setTimeout(function() {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Hello World from pid '+ process.pid +'\n')
    }, 2000)
  }).listen(1234)
}
