'use strict';

angular.module('pressreader')
.directive('prSideNav', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/sidenavbar/sidenavbar.html',
		scope: {
			categories: "=categories"
		},
		controller: function($scope) {

			$scope.getPostsByCategory = function(category) {

				console.log('getPostsByCategory: ', category);

			};
		}
	};
});