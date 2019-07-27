const express = require('express');
const path = require('path');

const outlerController = require('../controllers/outler')


const router  = express.Router()



router.get('/',outlerController.getIndex);
router.get('/products', outlerController.getProducts);
router.get('/products/:productId',outlerController.getProduct);

router.get('/cart', outlerController.getCart);
router.post('/cart',outlerController.postCart);
router.get('/orders', outlerController.getOrders);
router.get('/checkout', outlerController.getCheckout);
router.post('/cart-delete-item',outlerController.postCartDeleteProduct)



 

module.exports = router;