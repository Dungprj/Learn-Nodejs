const express = require('express');
const { getHomepage, getAbout } = require('../controllers/homeController');

const router = express.Router();

//khai bao router
router.get('/', getHomepage);

router.get('/about', getAbout);

module.exports = router;
