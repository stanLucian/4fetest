(function(){
	"use strict";
	angular.module("myApp").controller("aperitiviCtrl", ['$scope', '$routeParams', '$location', 'aperitivesServices', function($scope, $routeParams, $location, aperitivesServices){
		$scope.aperitivi = "aperitive";

		aperitivesServices.getAperitives(function(data){
			$scope.allAperitives = data;
		});

		$scope.currentAperitive = $routeParams.id;
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