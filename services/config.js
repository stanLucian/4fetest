(function(){
	"use strict";

	angular.module("myApp").service("config", [function(config){
		var baseUrl = "../api/";
		var self = this;

		this.urls = {
			Menus: baseUrl + 'database/menu-list.json',
			Aperitive: baseUrl + 'database/menu-list.json',

			//Menus
			getMenuListUrl: function(){
				return self.urls.Menus;
			},

			//Aperitives
			getAllAperitivesUrl: function(){
				return self.urls.Aperitive;
			},
			getAperitiveDetailsUrl: function(id){
				return self.urls.Aperitive + '/aperitive?id=' + id;
			}
		};
	}]);
}())
