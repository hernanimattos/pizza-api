const express = require('express');
const routerDoughs = express.Router();
const {
  getPizzasDoughs
} = require('../../controllers/dough')

routerDoughs.get('/doughs', getPizzasDoughs);

module.exports = routerDoughs;
