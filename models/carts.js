const fs   = require('fs');
const path = require('path');
const baseDir = require('../utils/path');
const p = path.join(baseDir,'data','carts.json');

module.exports = class Cart {
   static addProduct(id, productPrice) {
       let cart = {products:[],totalPrice:0};
       fs.readFile(p,(err,fileContent) =>{
           if(!err){
               cart = JSON.parse(fileContent);
           }
        const existingProductIndex = cart.products.findIndex(p => p.id===id);
        const existingProduct = cart.products[existingProductIndex];
        let updateProduct;
        if (existingProduct) {
            updateProduct = {...existingProduct};
            updateProduct.qty = updateProduct.qty + 1;
            cart.products = [...cart.products];
            cart.products[existingProductIndex] = updateProduct;
        }
        else{
            updateProduct = {id:id, qty:1};
            cart.products = [...cart.products, updateProduct];
        }
        cart.totalPrice = cart.totalPrice + +productPrice;
        fs.writeFile(p, JSON.stringify(cart), err =>{
            console.log(err);
        })
       })
       
   }

   static deleteProduct(id,productPrice) {
    fs.readFile(p,(err,fileContent) =>{
        if (err) {
            return;
        }
            const updatedCart = {...JSON.parse(fileContent)};
            const product = updatedCart.products.findIndex(prod => prod.id ===id);
            if (!product){
                return;
            }
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);

            updatedCart.totalPrice = updatedCart.totalPrice - productQty*productPrice;
            fs.writeFile(p, JSON.stringify(updatedCart), err =>{
                console.log(err);
            })
    });
   }

   static getCart(cb){
    fs.readFile(p,(err,fileContent) =>{
        const cart = JSON.parse(fileContent);
        if (err){
            cb(null);
        }
        else{
            cb(cart);
        }
        
        });
   }
}