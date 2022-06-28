// import { Product } from "./Product.js";
// import { Book } from "./Book.js";
class Basket {
    constructor() {
        this.Product = [];
    }
    addProduct(amount, Product) {
        this.Product.push(...Array(amount).fill(Product));
    }
    calculTotal() {
        return this.Product.map(product => product.price).reduce((a, b) => a + b, 0);
    }
    printShoppingInfo() {
        console.log("Total:" + this.calculTotal());
    }
}

export { Basket };