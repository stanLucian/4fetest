(function(){
	"use strict";

	angular.module("myApp").service("aperitivesServices", ["sync", "$filter", function(sync, $filter){

		this.getAperitives = function(cb){
			sync.getAperitives(function(data){
				cb(data);
			});
		};
		
		this.getAperitiveDetails = function(id, cb){
			sync.getAperitiveDetails(id, function(data){
				cb(data);
			});
		};

	}]);
}())
