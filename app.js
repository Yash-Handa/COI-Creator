require('dotenv').config({ path: './bin/.env' });
const createError = require('http-errors');
const express = require('express');
const path = require('path');

// require('./DB/connect');
const indexRouter = require('./routes/index');
const dataRouter = require('./routes/data');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// add global middlewares to the app instance
require('./middlewares/appMiddleware')(app);

app.use('/data', dataRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
require('./middlewares/appErrorMiddleware')(app);

module.exports = app;
