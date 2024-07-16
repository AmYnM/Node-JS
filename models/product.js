const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t; // the title of the product is t
    }
    save() {
        products.push(this);    // this refer to the object created based on the class 
    }

    // retrive all products from array
    static fetchAll() {     // static(keyword) is used for not creating new object with some new keyword
        return products;
    } 
}