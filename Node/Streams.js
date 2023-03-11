const http = require('http');
const {writeFileSync, createReadStream} = require('fs');

const server = http.createServer((req,res) => {


}) 

server.listen(5000,() => {
    console.log('server is running on port 5000')
})