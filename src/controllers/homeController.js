const getHomepage = (req, res) => {
    res.send('Hello world!');
};

const getAbout = (req, res) => {
    res.render('sample.ejs');
};

module.exports = {
    getHomepage,
    getAbout
};
