const express = require('express');
const bodyParser = require('body-parser');
const ping = require('./routes/ping');
const verb = require('./routes/verb');
const notFound = require('./routes/not-found');
const errorHandler = require('./routes/error');

module.exports = () => {
  const app = express();

  app.use(bodyParser.json());
  app.get('/ping', ping);
  app.get('/verb/:infinitive', verb);
  app.use('*', notFound);
  app.use(errorHandler);

  return app;
};
