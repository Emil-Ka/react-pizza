const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`http://localhost:${PORT}`);
});

app.get('/pizzas', (req, res) => {
  res.send('hello');
});