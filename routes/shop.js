const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
//   console.log('shop.js', adminData.products);
//   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
const products = adminData.products;
res.render('shop', {
     prods: products, 
     pageTitle: 'Shop', 
     path: '/', 
     hasProduct: products.length > 0,
     activeShop: true,
     productCSS: true,
     layout: false
    }); //Adding new key value pair "hasProduct" that have the key to check true or false
});

module.exports = router;
