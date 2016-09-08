'use strict';

/**
 * @ngdoc overview
 * @name angularZadanieApp
 * @description
 * # angularZadanieApp
 *
 * Main module of the application.
 */
angular
  .module('angularZadanieApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/addpost', {
        templateUrl: 'views/addpost.html',
        controller: 'AddpostCtrl',
        controllerAs: 'addpost'
      })
      .when('/viewpost/:postID', {
        templateUrl: 'views/viewpost.html',
        controller: 'ViewpostCtrl',
        controllerAs: 'viewpost'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
