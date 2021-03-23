const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

app.get(`/api/stock`, async (req, res) => {
  const stock = db.get('stock').value();
  return res.status(200).send(stock);
});
app.get(`/api/stock/:id`, async (req, res) => {
  const { id } = req.params;

  const stock = db.get('stock')
    .find({ id: Number(id) })
    .value()

    return res.status(200).send(stock)
});

app.get(`/api/products`, async (req, res) => {
  const products = db.get('products').value();
  return res.status(200).send(products);
});

app.get(`/api/product/:id`, async (req, res) => {
  const { id } = req.params;

  const product = db.get('products')
    .find({ id: Number(id) })
    .value()

  return res.status(200).send(product)
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('front/build'));

  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'front', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
