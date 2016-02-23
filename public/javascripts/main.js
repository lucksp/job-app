angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', '$window', function($scope, $http, $window){

	$scope.createApplicant = function(){
		$http.post('/applicant', $scope.newApplicant)
			.then(function(returnData){
				$scope.applicants = $scope.applicants || []
				$scope.applicants.push(returnData.data)
				$scope.newApplicant = {}
			})
	}

	$http.get('/applicant')
		.then(function(returnData){
			$scope.applicants = returnData.data
			console.log($scope.applicants)
		})

	$scope.redirectSubmit = function(){
		$window.location.href = '/success'
	}

	$scope.deleteBtn = function(applicant){
		alert("Are you Sure?")
		$http.post('/applicant/delete', {id: applicant._id}).then(function(returnData){
			$scope.applicants = returnData.data
		})
	}

	}]);
