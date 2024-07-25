const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename), 
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
  constructor(t) {
    this.title = t;
  }

  save() {
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
}