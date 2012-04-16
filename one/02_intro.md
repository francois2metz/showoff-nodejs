!SLIDE incremental
# Sondage express

<ul>
  <li class="delayed">Qui connaît nodejs ?</li>
  <li class="delayed">Qui a déjà codé plus de 5 lignes de nodejs ?</li>
  <li class="delayed">Qui a déjà publié un module npm ?</li>
  <li class="delayed">Qui a déjà publié + de 1 module npm ?</li>
</ul>

!SLIDE bullets incremental
# Nodejs c'est

* c/c++
* v8 (google vm)
* une petite librairie "standard"
* Linux/Mac/Windows/...

!SLIDE
## Décideurs pressés, ne partez pas tout de suite

<ul>
  <li class="delayed">N°2 sur Github en nombre de watcher</li>
  <li class="delayed">Copyright Joyent, Inc. and other Node contributors.</li>
  <li class="delayed">MIT</li>
  <li class="delayed"><strong class="modules">8911</strong> modules disponibles</li>
</ul>

!SLIDE bullets
# Qui l'utilise dans le monde ?

* Joyent
* Nodejitsu
* LearnBoost
* Yahoo
* ...

!SLIDE
# Hello world

    console.log('Hello world')

!SLIDE

    setTimeout(function() {
      console.log('world')
    }, 2000)
    console.log('Hello')

!SLIDE
# Require

    var url = require('url')

    console.log(url.parse('http://nodejs.org/api/url.html'))

!SLIDE
# Requêtes HTTP

    var http = require('http')

    http.get({host: 'duckduckgo.com'}, function(res) {
        console.log(res.statusCode)
    })

!SLIDE
# Serveur HTTP

    var http = require('http')

    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end('Hello World\n')
    }).listen(1234)

!SLIDE
## Un vrai programme

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

!SLIDE
# Les IO sont non bloquantes

!SLIDE
# Démonstration

    var http = require('http')

    console.log('currend pid', process.pid)

    http.createServer(function (req, res) {
        setTimeout(function() {
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('Hello World from pid '+ process.pid +'\n')
        }, 2000)
    }).listen(1234)

!SLIDE
# Event Loop / reactor pattern

!SLIDE
# Avantages

* 1 seul processus, 1 seul thread
* pas de mémoire partagé
* fast

!SLIDE
# Inconvénient

* 1 seul coeur utilisé
* callback soup ?

!SLIDE

> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.
