const express = require('express');
const path = require('path');

const outlerController = require('../controllers/outler')


const router  = express.Router()



router.get('/',outlerController.getIndex);
router.get('/products', outlerController.getProducts);
router.get('/cart', outlerController.getCart);
router.get('/orders', outlerController.getOrders);
router.get('/checkout', outlerController.getCheckout);



 

module.exports = router;