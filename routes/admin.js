const express = require('express');
const path    = require('path');
const rootDir    = require('../utils/path');

const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/add-product',adminController.getAddProduct);
router.get('/products',adminController.getProducts);


router.post('/product',adminController.postAddProduct);
router.get('/edit-product/:productId',adminController.getEditProduct);

router.post('/edit-product',adminController.postEditProduct);
router.post('/delete-product',adminController.postDeleteProduct);


module.exports = router;