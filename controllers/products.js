const products = [];

exports.getAddProduct = (req, res, next) => {   // export with the name of your wish
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //- Here setting the new field as path and enter the path of the file
    res.render('add-product', 
      { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
  };

exports.postProduct = (req, res, next) => {
    products.push({ title: req.body.title }); // as the products are not in this file, we should add the products empty array here in the top
    res.redirect('/');
  };

exports.getproducts = (req, res, next) => {
    //   console.log('shop.js', adminData.products);
    //   res.sendFile(path.join(rootDir, 'views', 'shop.html'))'
    res.render('shop', {
     prods: products, 
     pageTitle: 'Shop', 
    path: '/', 
     hasProduct: products.length > 0,
        activeShop: true,
        productCSS: true,
        layout: false
    }); //Adding new key value pair "hasProduct" that have the key to check true or false
};