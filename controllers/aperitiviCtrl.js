(function(){
	"use strict";
	angular.module("myApp").controller("aperitiviCtrl", ['$scope', '$routeParams', 'aperitivesServices', 'productService', function($scope, $routeParams, aperitivesServices, productService){
		
		aperitivesServices.getAperitives(function(data){
			$scope.allAperitives = data;
		});

		$scope.currentAperitive = productService.aperitive.filter(function(a){
			return (a.id == $routeParams.id);
		})[0];


		/*angular.forEach($scope.allAperitives, function(aperitive){
			if($routeParams.id == aperitive.id){
				$scope.currentAperitive = aperitive;
				breakAfter();
			}
		});
		aperitivesServices.getAperitiveDetails(function(id,data){
			$scope.aperitiveDetails = data;
		});*/


		

	}]);
}())
