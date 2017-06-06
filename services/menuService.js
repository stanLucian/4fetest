(function(){
	"use strict";

	angular.module("myApp").service("menuService", ["sync", function(sync){

		this.getMenulist = function(cb){
			sync.getMenulist(function(data){
				cb(data);
			});
		};


	}]);
}())