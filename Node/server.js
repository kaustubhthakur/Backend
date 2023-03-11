const http = require('http');
const port = 5000;
const app = http.createServer((req, res) => {
   if (req.url === '/') {
      res.end('HOME PAGE');
   }
   if (req.url === '/about') {
 
      res.end('ABOUT PAGE');
   }

})
app.listen(port, (req, res) => {
   console.log(`server is running on port : ${port}...`);
})