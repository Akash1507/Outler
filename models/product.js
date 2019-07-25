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
    constructor(title, imageUrl, description, price ){
        this.title       = title;
        this.imageUrl    = imageUrl;
        this.description = description;
        this.price       = price;
        }

    save(){
        getProductFromFile( products => {
            products.push(this);
            fs.writeFile(p,JSON.stringify(products), (err) =>{
                console.log(err);
            });
        })
    }

    static fetchAll(cb){
        getProductFromFile(cb);
    }
}