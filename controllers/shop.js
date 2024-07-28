// no product array related logic left
// create instead a class
const Product = require('../models/product'); 
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    //   console.log('shop.js', adminData.products);
    //   res.sendFile(path.join(rootDir, 'views', 'shop.html'))'
    Product.fetchAll((products) => {
      res.render('shop/product-list',{
        prods: products, 
        pageTitle: 'All Products', 
        path: '/products', 
        // hasProduct: products.length > 0, // we have from handlebars
        // activeShop: true,
        // productCSS: true,
        // layout: false
       }); //Adding new key value pair "hasProduct" that have the key to check true or false
    });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId, product => {
    res.render('shop/product-details', { 
      product: product, 
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index',{
      prods: products, 
      pageTitle: 'Shop', 
      path: '/', 
      // hasProduct: products.length > 0,
      // activeShop: true,
      // productCSS: true,
      // layout: false
     }); //Adding new key value pair "hasProduct" that have the key to check true or false
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

// postCart method
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price)
  })
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('/shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};