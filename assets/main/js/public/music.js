/*jshint eqnull:true */
/*global angular */
(function () {
    var app = angular.module('OsbertNgokWebsiteApp');
    app.component("musicList", {
      "controller": ["$http", function MusicListController($http) {
        var _this = this;
        // Get json
        $http({
          "method": "GET",
          "url": "/json/music.json"
        }).then(function successCallback(response) {
          _this.songs = response.data.data;
          console.log(_this);
        }, function errorCallback(response){
          _this.songs = [];
        });
      }],
      "templateUrl": "/music/music_list.html"
    });
    app.component("musicListDetail", {
      "bindings": {
        "song": "<"
      },
      "controller": [function MusicListDetailController() {
      }],
      "templateUrl": "/music/music_list_detail.html"
    });
}());