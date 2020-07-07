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


module.exports = {
  getPizzasFillings,
};
