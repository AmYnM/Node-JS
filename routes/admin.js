const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
// const rootDir = require('../utils/path');  // This is path not in use anymore

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products');

// /admin/add-product => POST
router.post('/add-product',adminController.postProduct );

  
module.exports = router;