'use strict';

/**
 * @ngdoc function
 * @name angularZadanieApp.controller:AddpostCtrl
 * @description
 * # AddpostCtrl
 * Controller of the angularZadanieApp
 */
angular.module('angularZadanieApp')
  .controller('AddpostCtrl',['requestFactory', '$scope', 'growl', 
      function (requestFactory, $scope, growl) {
        $scope.addPost = function () {
            requestFactory.addPost($scope.name, $scope.body)
                    .success(function (data, status) {
                        if (status === 201) {
                            growl.success('Post został dodany');
                        }
                
            });
        };
  }]);
