const express = require('express');
const path = require('path');
const rootDir    = require('../utils/path');

const router  = express.Router()

const adminData = require('./admin');


router.get('/',(req,res,next)=>{
    const products = adminData.products;
    res.render('outler',{prods:products, path:'/',pageTitle:"Home"});
});
 

module.exports = router;