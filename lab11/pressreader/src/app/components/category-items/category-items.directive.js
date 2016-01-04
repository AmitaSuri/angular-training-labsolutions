'use strict';

angular.module('pressreader')
.directive('prCategoryItems', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/category-items/category-items.html'
	};
});