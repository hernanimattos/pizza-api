const express = require('express');
const routerSizes = express.Router();
const {
  getPizzaSizes
} = require('../../controllers/sizes')

routerSizes.get('/sizes', getPizzaSizes)

module.exports = routerSizes
