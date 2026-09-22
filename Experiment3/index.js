const http = require("http"); //import http module from node.js
const server = http.createServer((req,res) => {
    res.writeHead(200,{
        "content-type" : 'text/plain',
        "server" : 'node.js'
    })
    res.end("Hello world");
});
const port = 5005;
server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})