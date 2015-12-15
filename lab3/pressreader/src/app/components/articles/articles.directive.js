'use strict';

angular.module('pressreader')
.directive('prArticles', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/articles/articles.html'
	}
});