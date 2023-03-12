const http = require('http')
const { getProducts ,getProduct,createProduct,updateProduct,deleteProduct} = require('./controllers/productController')
const port = 5000
const server = http.createServer((req, res) => {

    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res);
    }
    else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        getProduct(req, res, id)
    }
    else if(req.url ==='/api/products' && req.method==='POST')
    {
createProduct(req,res);
    }
    else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'PUT') {
        const id = req.url.split('/')[3]
        updateProduct(req, res, id)
    }
    else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'DELET')
    {
const id = req.url.split('/')[3]
deleteProduct(req,res,id)
    }
    else {
        res.writeHead(404, { 'Context-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'route not found' }));
    }

})
server.listen(port, () => {
    console.log('server is running on port 5000...')
})