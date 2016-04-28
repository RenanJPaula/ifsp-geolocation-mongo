'use strict';

var db = require('./config/db-config')
  , express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , app = express()
  , routeConfig = require('./config/route-config')
  , tweetProvider = require('./providers/tweet-provider');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
routeConfig.configApiRoutes(app);

tweetProvider.saveOnRead('#ifsp');

module.exports = app;
