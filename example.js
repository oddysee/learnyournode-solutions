var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('HELLO WORLD');
}).listen(1337, '0.0.0.0');
console.log('HELLO WORLD');