var supportersForm = angular.module ('supportersForm', []);

runnersForm.controller('supportersFormController', ['$scope', '$http', '$window', function($scope, $http, $window) {
	//Get runners in dropdown lists
	$http.get('/runners').success(function(response){
			$scope.runners = response;
		});
		
	$scope.supporter = {};
	
	//submit new individual supporter
	$scope.addSupporter = function(){
		if ($scope.supporter.runner.indexOf("Semimaraton") > -1){
			$scope.supporter.variableSum = Number($scope.supporter.sum) * 21;
		}
		else {
			$scope.supporter.variableSum = Number($scope.supporter.sum) * 4;
		}
		
		$http.post('/supporters', $scope.supporter).success(function(response){
			alert('Your registration has been submitted! Thank you!');
			$window.location.reload();
		})
	}
}]);