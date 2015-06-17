var runnersForm = angular.module ('runnersForm', []);

runnersForm.controller('runnersFormController', ['$scope', '$http', '$location', function($scope, $http, $location) {
	var refresh = function(){
		$location.url = '/runners-form/';
	};	
	refresh();
	
	$http.get('/projects').success(function(response){
			$scope.projects = response;
		});
	
	$scope.addRunner = function(){
		$http.post('/projects', $scope.runner).success(function(response){
			refresh();
		})
	}
}]);