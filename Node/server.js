const http = require('http');
const fs = require('fs')
const PORT = 6969;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', (error, data) => {
        if (error) 
        {
            res.writeHead(404);
            res.write('Error:file not found')
        }
        else 
        {
            res.write(data)
        }
        res.end()
    });
    
});
server.listen(PORT, (error) => {
    if (error)
        console.log('something went wrong ', error)
    else
        console.log(`server is runnin on port ${PORT}`)
})