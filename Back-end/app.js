const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const resRoutes = require('./Routes/Res');

const hostname = 'localhost';
const port = 3333;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/api', resRoutes);


mongoose.connect('mongodb+srv://sridhardb:sridhar@cluster0-z8emy.mongodb.net/food_delivery_app?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    console.log('Connected');
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    });
}).catch(err => {
    console.log(err);
})