const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //- Here setting the new field as path and enter the path of the file
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
  });
  
  // /admin/add-product => POST
  router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  });
  
  exports.routes = router;
  exports.products = products;