const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) =>{
    let body = '';
    if(req.url === "/" && req.method === "GET"){
        res.writeHead(200, {'content-type':"text-html"});
        fs.readFile('index.html', 'utf-8', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }

    else if(req.method === "GET"){
        const add = req.url;
        const q = url.parse(add, true);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(JSON.stringify(q.query));
        res.end();
    }

    else if(req.method === 'POST'){
        req.on('data', (data1) => {
            body += data1;
        });
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(body);
        });
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end("<h1>404 Error could not find that Page </h1>");
    }
}).listen(8000);

console.log('Server is running');