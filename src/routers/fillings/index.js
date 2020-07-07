const express = require('express');
const routerFillings = express.Router();
const {
  getPizzasFillings
} = require('../../controllers/filling');

routerFillings.get('/fillings', getPizzasFillings);

module.exports = routerFillings;
