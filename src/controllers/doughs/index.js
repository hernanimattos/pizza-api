const express = require('express');
const routerDoughs = express.Router();

const getPizzasDoughs = (req, res, next) => {
  res.send([{
      id: 1,
      name: 'Grossa',
    },
    {
      id: 2,
      name: 'Fina',
    },
    {
      id: 3,
      name: 'Recheada',
    },
  ]);

  next();
};

routerDoughs.get('/doughs', getPizzasDoughs);

module.exports = routerDoughs;
