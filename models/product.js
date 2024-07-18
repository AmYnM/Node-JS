// // const products = []; //saving in array
// // Save using file
// const fs = require('fs');
// const path = require('path');

// module.exports = class Product {
//   constructor(t) {
//     this.title = t;
//   }
    
//   save() {
//     // products.push(this);    // this refer to the object created based on the class 
//     const p = path.join(
//       path.dirname(require.main.filename), 
//       'data', 
//       'products.json'
//     );
//     fs.readFile(p, (err, fileContent) => {
//       let products = [];
//       if (!err) {
//         products = JSON.parse(fileContent); // takes incoming json and give back a javascript array or object or anything else
//        }
//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), err => {
//         console.log(err);
//       });
//     });
//   }
//   // retrive all products from array
//   static fetchAll(cb) {
//     const p = path.join(
//       path.dirname(require.main.filename), 
//       'data', 
//       'products.json'
//     );
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]);
//       }
//      cb(JSON.parse(fileContent));
//     });     // static(keyword) is used for not creating new object with some new keyword
//     return products;
//   } 
// }

const fs = require('fs');
const path = require('path');

const getProductsFromFile = () => {

}

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename), 
      'data', 
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
     }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(require.main.filename), 
      'data', 
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
     cb(JSON.parse(fileContent));
    //  return products;
    });
   } 
}