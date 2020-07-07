const getPizzaSizes = (req, res, next) => {

  res.send([{
      id: 1,
      name: 'Pequena',
    },
    {
      id: 2,
      name: 'Media',
    },
    {
      id: 3,
      name: 'Grande',
    },
  ]);

  next();
};

module.exports = {
  getPizzaSizes,
};
