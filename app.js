require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const db = require('./config/db');
const router = require('./src/routes/index');
const app = express();

const port = 5000;

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

MongoClient.connect(db.url, (err, database) => {
  if (err) {
    console.error(err); // eslint-disable-line
  }

  const collection = database.db('reservations');

  router(app, collection);

  app.listen(port, () => {
    console.log(`Listening on port: ${port}`); // eslint-disable-line
  });
});

