'use strict';

angular.module('pressreader')
.directive('prSideNav', ['$rootScope', function($rootScope) {
	return {
		restrict: 'E',
		templateUrl: 'app/components/sidenavbar/sidenavbar.html',
		scope: {
			categories: "=categories"
		},
		controller: function($scope, $rootScope) {

			$scope.selectCategory = function(category) {

				console.log('selectCategory: ', category);
				
				$rootScope.$emit('categoryselected', category, $rootScope.settings.postcount);
			};
		}
	};
}]);