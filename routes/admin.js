const path = require('path');

const express = require('express');

const ProductController = require('../controllers/products');
// const rootDir = require('../utils/path');  // This is path not in use anymore

const router = express.Router();



router.get('/add-product', ProductController.getAddProduct);
  
  // /admin/add-product => POST
  router.post('/add-product',ProductController.postProduct );
  
module.exports = router;