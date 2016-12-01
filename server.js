var mod = require('./module');


//mod.collection[0];

console.log(mod.randomPhrase());

// server.js
var http = require('http');
http.createServer(function(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });
response.write(mod.randomPhrase());
response.end();
}).listen(8888);
