const Product = require('../models/product');



exports.getProducts = (req,res,next)=>{
    Product.fetchAll( products => {
    res.render('outler/product-list',{prods:products, path:'/products',pageTitle:"Home"});
    });
}


exports.getIndex = (req,res,next)=>{
    Product.fetchAll( products => {
    res.render('outler/index',{prods:products, path:'/',pageTitle:"Home"});
    });
}


exports.getCart = (req,res,next) =>{
    res.render('outler/cart',{path:'/cart', pageTitle:"Cart"});
}

exports.getCheckout = (req,res,next) =>{
    res.render('outler/checkout',{path:'/checkout', pageTitle:"Checkout"});
}

exports.getOrders = (req,res,next) =>{
    res.render('outler/orders',{path:'/orders', pageTitle:"Orders"});
}