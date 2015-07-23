'use strict';

/**
 * @ngdoc overview
 * @name pensbookApp
 * @description
 * # pensbookApp
 *
 * Main module of the application.
 */
angular
  .module('pensbookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        //controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        //controllerAs: 'about'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        //controllerAs: 'map'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
