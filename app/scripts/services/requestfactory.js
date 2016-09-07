'use strict';

/**
 * @ngdoc service
 * @name angularZadanieApp.requestFactory
 * @description
 * # requestFactory
 * Factory in the angularZadanieApp.
 */
angular.module('angularZadanieApp')
  .factory('requestFactory',[ '$http', function ($http) {
    
    return {
      getPosts: function () {
        return $http.get('http://jsonplaceholder.typicode.com/posts');
      }
    };
  }]);
