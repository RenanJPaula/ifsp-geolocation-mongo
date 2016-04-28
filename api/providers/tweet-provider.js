'use strict';

var env = require('../config/env-config')
  , debug = require('../config/debug-config')('tweet-provider')
  , Twit = require('twit')
  , Participant = require('../models/participant-model');

module.exports.saveOnRead = function(hashtag) {
  var T = new Twit(env.twitter);
  var stream = T.stream('statuses/filter', { track: hashtag });

  stream.on('tweet', function (tweet) {
      var geoJSON = tweet.coordinates;
      if (geoJSON) {
          var participant = {
              name: tweet.user.name,
              image: tweet.user.profile_image_url,
              message: tweet.text,
              twitter: tweet.user.screen_name,
              loc: geoJSON
          };
          Participant.save(participant);
          debug("[INFO] @" + tweet.user.screen_name + " : " + tweet.text);
      } else {
          debug("[ERRO] @" + tweet.user.screen_name + " not turned on the exact localization.");
      }
  });
};
