'use strict';

angular.module('pressreader')
.directive('prTopToolbar', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/toptoolbar/toptoolbar.html'
	}
});