(function(){
	"use strict";

	angular.module("myApp").service("newsService", ["sync", function(sync){

		this.addNews = function(data, cb){
			sync.addNews(data, function(id){
				cb(id);
			}, function(response){
				console.log(response);
			});
		};
	}]);
}())