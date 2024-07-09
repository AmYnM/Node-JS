const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const product = [];

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add product');
  });
  
  // /admin/add-product => POST
  router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  });
  
  exports.routes = router;
  exports.products = products;