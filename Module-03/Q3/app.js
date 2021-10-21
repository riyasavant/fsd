const http = require('http'); 
const url = require('url'); 
http.createServer((req, res) => { 
    const queryObject = url.parse(req.url,true).query; 
    const name = queryObject.personName; 
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write(`Hello ${name}`); 
    res.end(); 
}).listen(5000);