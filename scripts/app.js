'use strict';

/**
 * @ngdoc overview
 * @name task13App
 * @description
 * # task13App
 *
 * Main module of the application.
 */
angular
  .module('task13App', [
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
        controller: 'MainCtrl'
      })
      .when('/:title/:currSeason/:currEpisod/:numberOfSeasons/:maxNumberOfEpisodes', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });