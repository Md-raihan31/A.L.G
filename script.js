
const http = require('http');

const fs = require('fs');

const hostname = '127.0.0.1';
const port = 6969;
const server = http.createServer((req, res)=>{
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end(‘Hello World’);