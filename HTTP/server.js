const http = require('http')
const {readFileSync} = require('fs');
const homePage = readFileSync('./index.html')
const server = http.createServer((req, res) => {
res.writeHead(200,{'Content-Type':'text/html'});
res.write(homePage);
res.end()
})
const port = 5000;
server.listen(port, () => {
    console.log(`server is running on port : ${port} ...`)
})