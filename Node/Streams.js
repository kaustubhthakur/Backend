const http = require('http');
const {writeFileSync, createReadStream} = require('fs');



server.listen(5000,() => {
    console.log('server is running on port 5000')
})