const path = require('path');
const express = require('express'); //commonjs
const configViewEngine = app => {
    app.set('views', path.join('./src', 'views')); //khai bao thu muc views de dung ejs
    app.set('view engine', 'ejs');
    //config static files :image/css/js
    app.use(express.static(path.join('./src', 'public')));
};

module.exports = configViewEngine;
