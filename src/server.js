//dotenv de dung bien trong file .env
require('dotenv').config();

//cung chay dc web nhung la dung thu vien express de chay web
const express = require('express'); //commonjs
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');

const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

//config req.body

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config template engine
configViewEngine(app);

//khai bao routes

app.use('/', webRouters);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
