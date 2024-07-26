const Product = require('../models/product'); 

exports.getAddProduct = (req, res, next) => {   // export with the name of your wish
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //- Here setting the new field as path and enter the path of the file
    res.render('admin/add-product', 
      { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
  };

exports.postProduct = (req, res, next) => {
    const product = new Product(req.body.title);        // Here the title is from the input type and input name in add-product ejs file
    product.save(); // this will use the save method used in model file
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products',{
          prods: products, 
          pageTitle: 'Admin Products', 
          path: '/admin/products'
         });
      });
};