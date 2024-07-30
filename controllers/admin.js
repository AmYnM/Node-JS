const Product = require('../models/product'); 

exports.getAddProduct = (req, res, next) => {   // export with the name of your wish
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //- Here setting the new field as path and enter the path of the file
    res.render('admin/edit-product', 
      { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product'
      });
  };

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;  
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    
    const product = new Product(title, imageUrl, price, description); 
    product.save(); // this will use the save method used in model file
    res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {   // export with the name of your wish
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  //- Here setting the new field as path and enter the path of the file
  res.render('admin/edit-product', 
    { 
      pageTitle: 'Add Product', 
      path: '/admin/add-product'
    });
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