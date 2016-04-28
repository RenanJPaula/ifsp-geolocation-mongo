'use strict';

var env = {
    appName: 'ifsp-geolocation'
  , version: 'v1'
  , port: process.env.API_PORT || 3000
  , db: {
      uri: process.env.DB_URI || 'mongodb://localhost/ifsp-geolocation'
    , credentials: {
          name: process.env.DB_USER || ''
        , pass: process.env.DB_PASS || ''
      }
    }
  , twitter: {
        consumer_key: 'lOURYKnqhv6ucx9Jqz7IQuou0'
      , consumer_secret: 'rl2DTkP1wXInxg2ujATsFSvrmIsbEjBQZP1WrzwIDiMxJEBIfG'
      , access_token: '2369619440-iReV9lBs9FlISBKkSYPaD1XhOu7CeVUl0l4iVwJ'
      , access_token_secret: 'MjXYA8xOfm0GEHmZFpuTo94wVPjCH9ic80YLN3KxlpKRK'
    }
};

module.exports = env;
