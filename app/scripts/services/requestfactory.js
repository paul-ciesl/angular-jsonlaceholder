'use strict';

/**
 * @ngdoc service
 * @name angularZadanieApp.requestFatory
 * @description
 * # requestFactory
 * Factory in the angularZadanieApp.
 */
angular.module('angularZadanieApp')
  .factory('requestFactory',[ '$http', function ($http) {
    
    return {
      getPosts: function () {
        return $http.get('http://jsonplaceholder.typicode.com/posts');
      },
      getPost: function (id) {
        return $http.get('http://jsonplaceholder.typicode.com/posts/'+id);
      },
      getUserData: function (id) {
        return $http.get('http://jsonplaceholder.typicode.com/users/'+id);
      },
      getComments: function (id) {
        return $http.get('http://jsonplaceholder.typicode.com/posts/'+id+
                '/comments');
      }
    };
  }]);
