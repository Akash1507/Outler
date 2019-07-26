const Product = require('../models/product');
const Cart = require('../models/carts');



exports.getProducts = (req,res,next)=>{
    Product.fetchAll( products => {
    res.render('outler/product-list',{prods:products, path:'/products',pageTitle:"Home"});
    });
}

exports.getProduct = (req,res,next)=>{
    const prodId = req.params.productId;
    Product.findById(prodId,product =>{
        res.render('outler/product-detail',{product:product,pageTitle:product.title, path:'/products'});
    })
    
}


exports.getIndex = (req,res,next)=>{
    Product.fetchAll( products => {
    res.render('outler/index',{prods:products, path:'/',pageTitle:"Home"});
    });
}


exports.getCart = (req,res,next) =>{
    res.render('outler/cart',{path:'/cart', pageTitle:"Cart"});
}

exports.postCart = (req,res,next) =>{
    const prodId = req.body.productId;
    Product.findById(prodId, (product) =>{
            Cart.addProduct(prodId,product.price);
    })
    res.render('outler/cart',{path:'/cart', pageTitle:"Cart"});
}

exports.getCheckout = (req,res,next) =>{
    res.render('outler/checkout',{path:'/checkout', pageTitle:"Checkout"});
}

exports.getOrders = (req,res,next) =>{
    res.render('outler/orders',{path:'/orders', pageTitle:"Orders"});
}