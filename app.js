(function (){
	"use strict";


var app = angular.module("myApp", ["ngRoute"]);	

app.config(function($routeProvider){
		$routeProvider
			//.when("/", {templateUrl: "index.html", controller: "aperitiviCtrl"})
			.when("/aperitivi", {templateUrl: "views/aperitivi.html", controller: "aperitiviCtrl"})
			.when("/menuDetails/:id", {templateUrl: "views/aperitivesDetails.html", controller: "aperitiviCtrl"})
			.otherwise ({
				redirectTo: "/"
			});
	});
}())
