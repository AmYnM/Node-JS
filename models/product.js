const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),  //path.dirname(process.mainModule.filename)
  'data', 
  'products.json'
);
// helper function which do path construction and read the file
const getProductsFromFile = cb => {     // cb is callback function
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
 } 


module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price
  }

  save() {
    // get product.id(dummy value)
    this.id = Math.random().toString();
    // instead of the above code, we use getProductsFromFile()
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  } 

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    })
  }
}