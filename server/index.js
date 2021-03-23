const path = require('path');
const express = require('express');

const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const PORT = process.env.PORT || 5000;

app.use(middlewares);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
}

app.use(router)
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
