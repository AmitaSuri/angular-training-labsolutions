'use strict';

angular.module('pressreader')
.directive('prTopToolbar', ['$rootScope', function($rootScope) {
	return {
		restrict: 'E',
		templateUrl: 'app/components/toptoolbar/toptoolbar.html',
		controller: function($scope) {

			$scope.switchThemeTo = function(opt) {
			    console.log(opt);
			  };

			  $scope.switchLangTo = function(opt) {
			    console.log(opt);
			  };

			  $scope.showSettings = function() {
			  	
			  	$rootScope.$emit('showsettings');
			  };
		}
	}
}]);