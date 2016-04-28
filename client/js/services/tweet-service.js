(function(angular) {
  'use strict';

  angular.module('ifsp').factory('TweetService', factory);

  factory.$inject = ['$http', '$q'];

  function factory($http, $q) {
    var svc = {}
      , tweetsUri = 'http://localhost:3000/api/v1/tweets';

    function defaultRequestCallback(request, resolve, reject) {
      request
        .success(function(resp) {
          resolve(resp);
        })
        .error(function(resp) {
          reject(resp);
        });
    }

    svc.getAll = function(search) {
      return $q(function(resolve, reject) {
        var request = $http.get(tweetsUri, { params: search });
        defaultRequestCallback(request, resolve, reject);
      });
    };

    return svc;
  }

})(angular);
