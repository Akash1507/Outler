const express = require('express');
const path    = require('path');
const rootDir    = require('../utils/path');

const router = express.Router();
const productController = require('../controllers/products')

router.get('/add-product',productController.getAddProduct);

router.post('/product',productController.postAddProduct);

module.exports = router;