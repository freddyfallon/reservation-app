require('dotenv').config()
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();

const port = 5000;


app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {
  if (err) {
    console.log(err);
  }

  const db = database.db('reservations');
  
  require('./src/routes/index')(app, db);

  app.listen(port, () => {
    console.error(`Listening on port: ${port}`);
  })
})