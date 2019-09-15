require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./server/router');

app.use('/api', router);

app.use(express.static('public'));

module.exports = app.listen(3000, '0.0.0.0');

console.log('Server listening on: \n - http://localhost:3000');