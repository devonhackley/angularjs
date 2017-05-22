'use strict';

const express = require('express');
const cors = require('cors');
let app = module.exports = express();

app.use(cors());

app.get('*', (req,res) => res.redirect('/'));

app.listen(3000, () => {
  console.log('Running on port ', 3000);
})
