var projects = angular.module ('projects', []);


projects.controller('projectsController', ['$scope', '$http', '$window', function($scope, $http, $window) {
	
	$scope.isCollapsed = true;
	
	var refresh = function(){
		$http.get('/projects').success(function(response){
			$scope.projects = response;
			$scope.project = "";
			$scope.newProject = "";
		});
	};
	
	refresh();
	
	$scope.addProject = function(){
		$http.post('/projects', $scope.newProject).success(function(response){
			alert('The poject has been added!');
		    $window.location.reload();	
		})
	}
	
	$scope.removeProject = function(id){
		var confirmDeletion = confirm('Are you sure you want to delete project ' + id + '?');
		if (confirmDeletion == true) {
				$http.delete('/projects/' + id).success(function(response){
					refresh();
			})
			return true;
		}
		else {
			return false;
		}	
	};
	
	$scope.editProject = function(id){
		$http.get('/projects/' + id).success(function(response){
			$scope.project = response;	
		});
	};
	
		$scope.saveProject = function(){
		var confirmUpdate = confirm ('Are you sure you want to make changes to project ' + $scope.project._id + '?');
		if (confirmUpdate == true){				
				$http.put('/projects/' + $scope.project._id, $scope.project).success(function(response){
					alert('Changes have been saved!');
					$window.location.reload();							
			})
			return true;
		}
		else {
			return false;
		}
	};
	
	$scope.cancel = function(){
		$scope.isCollapsed = true;
		refresh();
	}
}]);