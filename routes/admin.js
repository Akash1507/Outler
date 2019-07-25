const express = require('express');
const path    = require('path');
const rootDir    = require('../utils/path');

const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/add-product',adminController.getAddProduct);
router.get('/products',adminController.getProducts);


router.post('/product',adminController.postAddProduct);

module.exports = router;