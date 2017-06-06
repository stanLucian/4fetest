(function (){
	"use strict";

	angular.module('myApp').controller("newsCtrl", ["$scope", "newsService", function($scope, newsService){
		$scope.title = "sa inceapa nebunia";
		$scope.sendData = function(){
			newsService.addNews(function(data,cb){
			$scope.data = {
				"name": "mircea",
				"age": "22"
			};
			cb($scope.data);
		});
		}
		
	}]);
}())