const listOfPizzas = [{
    id: 1,
    name: 'A Casa Caiu',
    promotion: false,
    ingredients: {
      filling: 'Muzzarela',
      dough: 'Fina',
      size: 'Grande',
    },
  },
  {
    id: 2,
    name: 'A Casa é Nossa',
    promotion: true,
    ingredients: {
      filling: 'Frango',
      dough: 'Recheada',
      size: 'Media',
    },
  },
  {
    id: 3,
    name: 'A Casa é Sua',
    promotion: false,
    ingredients: {
      filling: 'Calabreza',
      dough: 'Grossa',
      size: 'Fina',
    },
  },
];

const getProducts = (req, res, next) => {
  res.send(listOfPizzas.filter((product) => product.promotion));

  next();
};

const orderPromotions = (req, res, next) => {
  const {
    id
  } = req.body;
  const promotionPizza = listOfPizzas.find(
    (product) => product.id == id && product.promotion,
  );
  let response = {
    status: 'Pizza não encontrada ou não está em promoção',
  };

  if (promotionPizza) {
    response = {
      title: 'Pedido feito com sucesso',
      message: 'Parabéns pela compra vc acaba de acumular potos no cartão satisfação do cidadão',
    };
  }

  res.send(response);

  next();
};

const orderProduct = (req, res, next) => {
  let response = req.body === {} ? false : true;
  response = Object.keys(req.body).map((key) => !req.body[key] == 0)[0];

  if (!response) {
    res.send({
      status: 'Deu ruim',
    });
  }

  res.send({
    title: 'Pedido feito com sucesso',
    message: 'Sua pizza será entregue assim que o covid-19 for controlado',
  });

  next();
};


module.exports = {
  orderProduct,
  orderPromotions,
  getProducts
};
