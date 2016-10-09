/*jshint eqnull:true */
/*global angular */
(function () { 
    var app = angular.module('OsbertNgokWebsiteApp', ['ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'partials/public/partial-home.html'
        })

        .state('bio', {
          abstract: true,
          url: '/bio',
          templateUrl: 'partials/public/partial-bio.html'
        })

        .state('bio.oneliner', {
          url: '/oneliner',
          parent: 'bio',
          templateUrl: 'partials/public/partial-bio-oneliner.html'
        })

        .state('bio.multiline', {
          url: '/multiline',
          parent: 'bio',
          templateUrl: 'partials/public/partial-bio-multiline.html'
        })

        .state('bio.full', {
          url: '/full',
          parent: 'bio',
          templateUrl: 'partials/public/partial-bio-full.html'
        })

        .state('music', {
          abstract: true,
          url: '/music',
          templateUrl: 'partials/public/partial-music.html'
        })

        .state('music.songlist', {
          url: '/songlist',
          parent: 'music',
          templateUrl: 'partials/public/partial-music-list.html'
        })

        .state('about', {

        });
    }]);   
}());