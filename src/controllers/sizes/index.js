const express = require('express');
const router = express.Router();

const getPizzaSizes = (req, res, next) => {
  // console.log('quiiiiiii', res)
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
router.get('/sizes', getPizzaSizes)

module.exports = router
