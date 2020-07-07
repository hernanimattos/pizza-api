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

module.exports = {
  getPizzasDoughs,
};
