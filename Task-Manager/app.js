const express = require('express')
const app = express();
require('dotenv').config();
const connectDB = require('./db/connect');
require('./db/connect');
const tasks = require('./routes/tasks')
const port = 5000;
app.use(express.static('./public'))
app.use(express.json());



app.use('/api/v1/tasks', tasks);
const start = async () => 
{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`)
        })
    } catch (error) {
        console.log(err);
    }
}
start();

