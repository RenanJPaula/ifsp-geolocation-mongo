'use strict';

var express = require('express')
  , route = express.Router()
  , Participant = require('../models/participant-model');

route.get('/tweets', function(req, res) {
  Participant.findNear(req.query)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({err: err});
    })
});

module.exports = route;
