(function(){
	"use strict";

	angular.module("myApp").service("aperitivesServices", ["sync", function(sync){

		this.getAperitives = function(cb){
			sync.getAperitives(function(data){
				cb(data);
			});
		};
		this.getAperitiveDetails = function(cb){
			sync.getAperitiveDetails(function(data){
				cb(data);
			});
		};

	}]);
}())