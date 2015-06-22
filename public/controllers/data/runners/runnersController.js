var runners = angular.module ('runners', []);

runners.controller('runnersController', ['$scope', '$http', function($scope, $http) {	
		$http.get('/runners').success(function(response){
			$scope.runners = response;
		});	
}]);