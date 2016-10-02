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
          templateUrl: 'partials/public/partial-bio.html'
        })

        .state('bio.oneliner', {
          url: '/bio/oneliner',
          parent: 'bio',
          templateUrl: 'partials/public/partial-bio-oneliner.html'
        })

        .state('bio.multiline', {
          url: '/bio/multiline',
          parent: 'bio',
          templateUrl: 'partials/public/partial-bio-multiline.html'
        })

        .state('bio.full', {
          url: '/bio/full',
          parent: 'bio',
          templateUrl: 'partials/partial-bio-full.html'
        })

        .state('music', {
          abstract: true,
          templateurl: 'partials/public/partial-music.html'
        })

        .state('music.albumlist', {
          url: '/music/album/',
          parent: 'music',
          templateUrl: 'partial/partial-music-albumlist.html'
        })

        .state('music.songlist', {
          url: '/music/album/:albumName',
          parent: 'music',
          templateUrl: 'partial/partial-music-albumlist.html'
        })

        .state('about', {

        });
    }]);   
}());