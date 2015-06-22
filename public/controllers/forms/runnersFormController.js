var runnersForm = angular.module ('runnersForm', []);

runnersForm.controller('runnersFormController', ['$scope', '$http', '$window', function($scope, $http, $window) {
	//Get projects in dropdown lists
	$http.get('/projects').success(function(response){
			$scope.projects = response;
		});
		
	$scope.runner = {};
	
	//submit new individual runner
	$scope.addRunner = function(){
		$http.post('/runners', $scope.runner).success(function(response){
			alert('Your registration has been submitted! Thank you!');
			$window.location.reload();
		})
	}
}]);