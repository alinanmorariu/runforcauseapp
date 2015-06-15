var projects = angular.module ('projects', []);


projects.controller('projectsController', ['$scope', '$http', function($scope, $http) {
	
	var refresh = function(){
		$http.get('/projects').success(function(response){
			$scope.projects = response;
			$scope.project = "";
		});
	};
	
	refresh();
	
	$scope.addProject = function(){
		$http.post('/projects', $scope.project).success(function(response){
			refresh();
		})
	}
	
	$scope.removeProject = function(id){
		console.log(id);
		$http.delete('/projects/' + id).success(function(response){
			refresh();
		})
	};
	
	$scope.editProject = function(id){
		$http.get('/projects/' + id).success(function(response){
			$scope.project = response;		
		})
	}
	
	$scope.saveProject = function(){
		console.log($scope.project._id);
		$http.put('/projects/' + $scope.project._id, $scope.project).success(function(response){
			refresh();
		})
	}
	
	$scope.isCollapsed = true;
	$scope.cancel = function(){
		$scope.isCollapsed = true;
		refresh();
	}
}]);