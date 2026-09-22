const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader('Content-type','text/plain');

    if(req.method === 'GET' && req.url === '/students'){
        res.statusCode = 200; return res.end('GET: Student list');
    }
    else if(req.method === 'POST' && req.url === '/students'){
        res.statusCode = 201; return res.end('POST: Student created');
    }
    else if(req.method === 'PUT' && req.url === '/students/101'){
        res.statusCode = 200; return res.end('PUT: Student updated');
    }
    else if(req.method === 'DELETE' && req.url === '/students/101'){
        res.statusCode = 200; return res.end('DELETE: Student deleted');
    }
    else{
        res.statusCode =  404; return res.end('Route not found');
    }
});
server.listen(3000, () => console.log('Server on 3000'));