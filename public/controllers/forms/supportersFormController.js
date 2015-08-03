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
		
		var firstOccurence = $scope.supporter.runner.indexOf("*");
		var lastOccurence = $scope.supporter.runner.lastIndexOf("*");
		
		$scope.supporter.runnerName = $scope.supporter.runner.substring(0, firstOccurence);
		$scope.supporter.runnerProject = $scope.supporter.runner.substring(firstOccurence+1, lastOccurence);
		$scope.supporter.runnerRace = $scope.supporter.runner.substring(lastOccurence+1);
		
		$http.post('/supporters', $scope.supporter).success(function(response){
			alert('Your registration has been submitted! Thank you!');
			$window.location.reload();
		})
	}
}]);