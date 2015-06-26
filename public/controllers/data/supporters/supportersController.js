var supporters = angular.module ('supporters', []);

supporters.controller('supportersController', ['$scope', '$http', '$window', function($scope, $http, $window) {	
		$http.get('/supporters').success(function(response){
			$scope.supporters = response;
		});	
		
	$scope.removeSupporter = function(id){
			var confirmDeletion = confirm('Are you sure you want to delete supporter ' + id + '?');
			if (confirmDeletion == true) {
					$http.delete('/supporters/' + id).success(function(response){
						alert('Supporter has been deleted!');
						$window.location.reload();
				})
				return true;
			}
			else {
				return false;
			}	
	};
	
	$scope.editSupporter = function(id){
		$http.get('/supporters/' + id).success(function(response){
			$scope.supporter = response;	
		})
	};
	
	$scope.saveSupporter = function(){
		var confirmUpdate = confirm ('Are you sure you want to make changes to supporter ' + $scope.supporter._id + '?');
		if (confirmUpdate == true){				
				$http.put('/supporters/' + $scope.supporter._id, $scope.supporter).success(function(response){
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