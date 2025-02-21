const express = require('express');
const {
    getHomepage,
    getAbout,
    postCreateUser
} = require('../controllers/homeController');

const router = express.Router();

//khai bao router
router.get('/', getHomepage);

router.get('/about', getAbout);

router.post('/create-user', postCreateUser);

module.exports = router;
