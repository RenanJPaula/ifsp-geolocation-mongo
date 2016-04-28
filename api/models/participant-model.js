'use strict';

var mongoose = require('mongoose')
  , schema = new mongoose.Schema({
        name: { type: String, required: true }
      , image: { type: String, required: true }
      , message: { type: String, required: true}
      , twitter: { type: String, required: true }
      , loc: {
          type: { type: String },
          coordinates: []
        }
    });

schema.index({ loc : '2dsphere' });

var Participant = mongoose.model('Participant', schema);

module.exports.save = function save(participant) {
  return new Promise(function(resolve, reject) {
    new Participant(participant).save(function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports.findNear = function(params) {
  return new Promise(function(resolve, reject) {
     let query = {};

     if(params.lat && params.long && params.dist) {
       query.loc = {
         $near: {
           $maxDistance: parseFloat(params.dist),
           $geometry: { type: 'Point', coordinates: [ parseFloat(params.lat), parseFloat(params.long) ] }
          }
        };
     }

     Participant.find(query, function(err, data) {
       if(err) {
         reject(err);
       } else {
         resolve(data);
       }
     });
 });
}
