const path = require('path');

const express = require('express');

const ProductController = require('../controllers/products');

const router = express.Router();

router.get('/', ProductController.getproducts);

module.exports = router;
