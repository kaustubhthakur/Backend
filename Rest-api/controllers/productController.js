const Product = require('../models/productModel');
const { getPostData } = require('../utils');
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.writeHead(200, { 'Context-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
}
const getProduct = async (req, res, id) => {
    try {
        const product = await Product.findById(id)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ messgae: 'product not found' }));
        }
        else {

            res.writeHead(200, { 'Context-Type': 'application/json' });
            res.end(JSON.stringify(product));
        }
    } catch (error) {

        console.log(error);
    }
}

const createProduct = async (req, res, id) => {
    try {


        const body = await getPostData(req)

        const { title, description, price } = JSON.parse(body);
        const product = {
            title,
            description,
            price
        }

        const newProduct = await Product.Create(product)
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(newProduct));


    } catch (error) {

        console.log(error);
    }
}
const updateProduct = async (req, res, id) => {
    try {

        const product = await Product.findById(product)
if(!product)
{
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ messgae: 'product not found' }));
}
else 
{
     const body = await getPostData(req)

        const { title, description, price } = JSON.parse(body);
        const productData = {
            title:title ||product.title,
            description:description || product.description,

            price:price||product.price
        }

        const updateProduct = await Product.update(id,productData)
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(updateProduct));

 
}
      
    } catch (error) {

        console.log(error);
    }
}
async function deleteProduct(req, res, id) {
    try {
        const product = await Product.findById(id)

        if(!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            await Product.remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Product ${id} removed` }))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}