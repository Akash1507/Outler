const fs   = require('fs');
const path = require('path');
const baseDir = require('../utils/path');
const p = path.join(baseDir,'data','products.json');

const getProductFromFile = cb => {
        fs.readFile(p,(err,fileContent)=>{
            if (err){
                return cb([]);
            }
            return cb(JSON.parse(fileContent));
        })
}

const products = []

module.exports = class Product{
    constructor(id,title, imageUrl, description, price ){
        this.id          = id;
        this.title       = title;
        this.imageUrl    = imageUrl;
        this.description = description;
        this.price       = price;
        }

    save(){
        
        getProductFromFile( products => {
            if (this.id){
            const existingProductIndex = products.findIndex(prod => prod.id ===this.id);
            const updatedProduct = [...products];
            updatedProduct[existingProductIndex] = this;
            fs.writeFile(p,JSON.stringify(updatedProduct), (err) =>{
                console.log(err);
            });
            }else{
            this.id = Math.random().toString();
            products.push(this);
            fs.writeFile(p,JSON.stringify(products), (err) =>{
                console.log(err);
            });
        }
        })
    }

    static fetchAll(cb){
        getProductFromFile(cb);
    }

    static deleteById(id){
        getProductFromFile(products =>{
            const updateProducts = products.filter(prod => prod.id !== id);
            cb(product);
        })
    }

    static findById(id,cb) {
        getProductFromFile(products =>{
            const product = products.find(p => p.id === id);
            cb(product);
        })
    }
}