'use strict';

/**
 * @ngdoc function
 * @name angularZadanieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularZadanieApp
 */
angular.module('angularZadanieApp')
        .controller('MainCtrl', ['requestFactory', '$scope',
            function (requestFactory, $scope) {
                $scope.currentPage = 0;
                $scope.pageSize = 10;
                $scope.numberOfPages = function () {
                    return Math.ceil($scope.dataLength / $scope.pageSize);
                };
                requestFactory.getPosts().success(function (responce) {
                    $scope.posts = responce;
                    $scope.dataLength = $scope.posts.length;
                });
            }]);
