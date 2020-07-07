const express = require('express');
const routerProducts = express.Router();
const {
  getProducts,
  orderProduct,
  orderPromotions
} = require('../../controllers/products')

routerProducts.get('/product/promotion', getProducts);
routerProducts.post('/product/order/promotion', orderPromotions);
routerProducts.post('/product/order', orderProduct);

module.exports = routerProducts;
