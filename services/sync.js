(function(){
	"use strict";

	angular.module("myApp").service("sync", ["$http", "config", function($http, config){
		
		var registerPostRequest = function(url, data, cb, err){
			$http.post(url, data).success(cb).error(err);
		};
		var registerGetRequest = function(url, cb){
			$http.get(url).success(cb);
		};
		var registerGetRequestWithData = function(url, data, cb){
			$http.get(url, {params:data}).success(cb);
		};
		//Menus
		this.getMenulist = function(cb){
			var url = config.urls.getMenuListUrl();
			registerGetRequest(url, cb);
		};
		//Aperitives
		this.getAperitives = function(cb){
			var url = config.urls.getAllAperitivesUrl();
			registerGetRequest(url, cb);
		};
		this.getAperitiveDetails = function(id,cb){
			var url = config.urls.getAperitiveDetailsUrl(id);
			registerGetRequestWithData(url, id, cb);
		};
	}]);

}())