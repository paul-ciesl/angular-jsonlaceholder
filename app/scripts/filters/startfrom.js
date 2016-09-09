'use strict';

/**
 * @ngdoc filter
 * @name angularZadanieApp.filter:startFrom
 * @function
 * @description
 * # startFrom
 * Filter in the angularZadanieApp.
 */
angular.module('angularZadanieApp')
  .filter('startFrom', function () {
    return function(input, start) {
        if (input !== undefined) {
          start = +start; //parse to int
          return input.slice(start);
        }
    };
  });
