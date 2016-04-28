(function(angular) {
  'use strict';

  angular.module('ifsp').controller('TweetController', controller);

  controller.$inject = ['TweetService', '$location'];

  function controller(tweetService, $location) {
    var ctrl = this;

    ctrl.init = function() {
      tweetService.getAll($location.search()).then(function(tweets) {
        ctrl.tweets = tweets;
      });
    }
  }

})(angular);
