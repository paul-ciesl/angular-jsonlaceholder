'use strict';

/**
 * @ngdoc function
 * @name angularZadanieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularZadanieApp
 */
angular.module('angularZadanieApp')
  .controller('MainCtrl',[ 'requestFactory', '$scope', 
      function (requestFactory, $scope) {
        requestFactory.getPosts().success(function (responce) {
        $scope.posts = responce;
    });
  }]);
