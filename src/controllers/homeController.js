const conection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
};

const getAbout = (req, res) => {
    res.render('sample.ejs');
};

const postCreateUser = (req, res) => {
    console.log('req.body = ', req.body);
    res.send('create user');
};
module.exports = {
    getHomepage,
    getAbout,
    postCreateUser
};
