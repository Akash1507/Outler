const products = [];

exports.getAddProduct = (req,res,next)=>{
    res.render('addproduct',{pageTitle:"Add Product Page",path:"/admin/add-product"});
}

exports.postAddProduct = (req,res,next)=>{
    products.push({title:req.body.title})
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
    res.render('outler',{prods:products, path:'/',pageTitle:"Home"});
}