'use strict';

/**
 * @ngdoc function
 * @name angularZadanieApp.controller:ViewpostCtrl
 * @description
 * # ViewpostCtrl
 * Controller of the angularZadanieApp
 */
angular.module('angularZadanieApp')
  .controller('ViewpostCtrl', [ '$routeParams', 'requestFactory', '$scope',
      function ($routeParams, requestFactory, $scope) {
    requestFactory.getPost($routeParams.postID).success(function (responce) {
        $scope.post = responce;
        requestFactory.getUserData($scope.post.userId).success(
                function (responce) {
            $scope.user = responce;
            requestFactory.getComments($routeParams.postID).success(
                    function (responce){
                $scope.comments = responce;
            });
        });
    });
  }]);
