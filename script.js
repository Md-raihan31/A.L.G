
const http = require('http');

const fs = require('fs');

const hostname = '127.0.0.1';
const port = 6969;

const home = fs.readFileSync(./index.html) 
const home = fs.readFileSync(./about.html)
const home = fs.readFileSync(./register.html)
const home = fs.readFileSync(./suppourt.html)                             
const server = http.createserver((req, res)=>{
console.log(req.url);
url = req.url;
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end(‘Hello  world’);
 res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr-O_Ou__j9yrTj4YSxCm4v5J2rAHIST8",
  authDomain: "alcwebsite-711f7.firebaseapp.com",
  projectId: "alcwebsite-711f7",
  storageBucket: "alcwebsite-711f7.firebasestorage.app",
  messagingSenderId: "1097855001452",
  appId: "1:1097855001452:web:07ba16df38c3aa09c1c949",
  measurementId: "G-BQ9NBTETX9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
