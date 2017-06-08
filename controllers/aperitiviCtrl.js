(function(){
	"use strict";
	angular.module("myApp").controller("aperitiviCtrl", ['$scope', '$routeParams', 'aperitivesServices', 'productService','$http', function($scope, $routeParams, aperitivesServices, productService, $http){
	
		aperitivesServices.getAperitives(function(data){
			$scope.allAperitives = data.menus;
		});
		$scope.getAperitives = function(){
			aperitivesServices.getAperitives(function(data){
				$scope.allAperitives = data;
			});
		};
		$scope.aperitivDetails = function(id) {
			aperitivesServices.getAperitiveDetails(id, function(data){
				$scope.getAperitives();
			});
		};

		/*var baseUrl = "../api/";
		$http({
		  method: 'GET',
		  url: baseUrl + 'database/menu-list.json',
		}).then(function successCallback(response) {
			$scope.data = response.data.menus;
		    console.log($scope.data);
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
		$scope.currentAperitive = productService.aperitive.filter(function(a){
			return (a.id == $routeParams.id);
		});
		//$scope.aperitiv = productService.aperitive[17]; 

		/*angular.forEach($scope.allAperitives, function(aperitive){
			if($routeParams.id == aperitive.id){
				$scope.currentAperitive = aperitive;
				breakAfter();
			}
		});*/
		//aperitivesServices.getAperitiveDetails(function(id,data){
		//	$scope.aperitiveDetails = data;
	//	});

	}]);
}())
