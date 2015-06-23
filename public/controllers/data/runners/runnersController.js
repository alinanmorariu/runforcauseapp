var runners = angular.module ('runners', []);

runners.controller('runnersController', ['$scope', '$http', '$window', function($scope, $http, $window) {	
		$http.get('/runners').success(function(response){
			$scope.runners = response;
		});	
		
	$scope.removeRunner = function(id){
			var confirmDeletion = confirm('Are you sure you want to delete runner ' + id + '?');
			if (confirmDeletion == true) {
					$http.delete('/runners/' + id).success(function(response){
						$window.location.reload();
				})
				return true;
			}
			else {
				return false;
			}	
	};
	
	$scope.editRunner = function(id){
		$http.get('/runners/' + id).success(function(response){
			$scope.runner = response;	
		})
	};
	
	$scope.saveRunner = function(){
		var confirmUpdate = confirm ('Are you sure you want to make changes to runner ' + $scope.runner._id + '?');
		if (confirmUpdate == true){				
				$http.put('/runners/' + $scope.runner._id, $scope.runner).success(function(response){
					alert('Changes have been saved!');
					$window.location.reload();			
			})
			return true;
		}
		else {
			return false;
		}
	};
	
	$scope.isCollapsed = true;
	$scope.cancel = function(){
		$scope.isCollapsed = true;
	}

}]);