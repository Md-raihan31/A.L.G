
const http = require('http');

const fs = require('fs');

const hostname = '127.0.0.1';
const port = 6969;
const home = fs.readFileSync(./index.html)
const server = http.createserver((req, res)=>{
console.log(req.url)
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end(‘Hello  world’);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });