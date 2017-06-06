(function(){
	
"use strict";
	angular.module("myApp").controller("mainCtrl", ["$scope", "menuService", 'productService', function($scope, menuService, productService){
		$scope.title = "asdsdsa";
		menuService.getMenulist(function(data){
			$scope.menus = data;
			//$scope.menus.subcategories = data.name;
		});

		$scope.aperitive = productService.aperitive;
		$scope.desert = productService.deserturi;
			
	}]);

}())