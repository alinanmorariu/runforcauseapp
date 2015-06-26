var supportersForm = angular.module ('supportersForm', []);

runnersForm.controller('supportersFormController', ['$scope', '$http', '$window', function($scope, $http, $window) {
	//Get runners in dropdown lists
	$http.get('/runners').success(function(response){
			$scope.runners = response;
		});
		
	$scope.supporter = {};
	
	//submit new individual supporter
	$scope.addSupporter = function(){
		$http.post('/supporters', $scope.supporter).success(function(response){
			alert('Your registration has been submitted! Thank you!');
			$window.location.reload();
		})
	}
}]);