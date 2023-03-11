const http = require('http');
const port = 5000;
const app = http.createServer((req, res) => {
   if (req.url == '/') {
      res.end('welcome to home page');
   }
   if (req.url == '/about') {
      res.end('welcome to about page');
   }
 
})
app.listen(port, (req, res) => 
{
   console.log(`server is running on port ${port}...`);
})