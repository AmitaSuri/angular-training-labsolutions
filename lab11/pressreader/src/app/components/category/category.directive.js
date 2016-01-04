'use strict';

angular.module('pressreader')
.directive('prCategory', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/category/category.html'
	};
});