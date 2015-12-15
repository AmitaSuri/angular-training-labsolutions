'use strict';

angular.module('pressreader', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
