'use strict';

/**
 * @ngdoc function
 * @name angularZadanieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularZadanieApp
 */
angular.module('angularZadanieApp')
        .controller('MainCtrl', ['requestFactory', '$scope', '$timeout',
            function (requestFactory, $scope, $timeout) {
                $scope.currentPage = 0;
                $scope.pageSize = "10";
                $scope.updateView = function () { //wait for 'filtered' to be changed
                    $scope.currentPage = 0;
                    if ($scope.filtered !== undefined) {
                      $scope.numberOfPages = Math.ceil($scope.filtered.length / $scope.pageSize);
                    } else {
                      $scope.numberOfPages = Math.ceil($scope.posts.length / $scope.pageSize);  
                    }
                };
                
                requestFactory.getPosts().success(function (responce) {
                    $scope.posts = responce;
                    
                }).then(function (){
                    $scope.updateView();
                });
                                
                $scope.filter = function () {
                    $timeout($scope.updateView(), 10);
                };
                
            }]);
