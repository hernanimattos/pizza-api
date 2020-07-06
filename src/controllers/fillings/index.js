const express = require('express');
const routerFillings = express.Router();

const getPizzasFillings = (req, res, next) => {
  res.json([{
    id: 1,
    name: 'Mussarela'
  }, {
    id: 2,
    name: 'Calabreza'
  }, {
    id: 3,
    name: 'Frango'
  }])

  next();

}

routerFillings.get('/fillings', getPizzasFillings);

module.exports = routerFillings;
