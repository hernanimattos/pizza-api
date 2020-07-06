const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const routeSizes = require('./controllers/sizes');
const routerDoughs = require('./controllers/doughs');
const routerFillings = require('./controllers/fillings');

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

app.use('/api', routeSizes);
app.use('/api', routerDoughs);
app.use('/api', routerFillings);

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  next(createError(404));
});


app.listen(Port, () => {
  console.log(`Servidor rodando na port ${Port}`);
});

module.exports = app;
