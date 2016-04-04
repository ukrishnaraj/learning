var http = require('http');

var server = http.createServer(function(req,res){
res.writeHead(200);
res.end('HELLO WORLD ');
});
server.listen(8080);
console.log('HELLO WORLD');