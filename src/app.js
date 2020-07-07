const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const routerSizes = require('./routers/sizes');
const routerDoughs = require('./routers/doughs');
const routerFillings = require('./routers/fillings');
const routerProducts = require('./routers/products');

const Port = 3000;

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(cookieParser());

app.use('/api', routerSizes);
app.use('/api', routerDoughs);
app.use('/api', routerFillings);
app.use('/api', routerProducts);

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  next(createError(404));
});

app.listen(Port, () => {
  console.log(`Servidor rodando na port ${Port}`);
});

module.exports = app;
