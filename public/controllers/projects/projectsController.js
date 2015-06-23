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
		$http.post('/projects', $scope.newProject).success(function(response){
			refresh();
			$scope.newProject = "";
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
			console.log(response);		
		})
	}
	
	$scope.saveProject = function(){
		console.log($scope.project._id);
		var confirmUpdate = confirm ('Are you sure you want to make changes to project ' + $scope.project._id + '?');
		if (confirmUpdate == true){				
				$http.put('/projects/' + $scope.project._id, $scope.project).success(function(response){					
					refresh();						
			})
			return true;
		}
		else {
			return false;
		}
	}
	
	$scope.isCollapsed = true;
	$scope.cancel = function(){
		$scope.isCollapsed = true;
		refresh();
	}
}]);