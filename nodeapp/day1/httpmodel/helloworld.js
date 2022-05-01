let http = require('http');
http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type' : 'html'})
    res.end('hello world');
}).listen(4000);

