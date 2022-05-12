const express = require('express');
require('dotenv').config();

const pool = require('../db/db');

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`http://localhost:${PORT}`);
});

app.get('/pizzas', async (req, res) => {
  const {rows} = await pool.query('SELECT * FROM pizzas');
  console.log(rows[0].types);
  res.json(rows);
});

app.post('/cart', (req, res) => {
  const {id} = req.body;
  console.log(id);
  res.json('ok');
})