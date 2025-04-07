const express = require('express');
const app = express();
const transActionRoutes= require('./routes/transactions.routes');

app.use(express.json());
app.use('/transactions', transActionRoutes)

module.exports = app;