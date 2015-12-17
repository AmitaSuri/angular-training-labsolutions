'use strict';

angular.module('pressreader')
.directive('prArticle', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/article/article.html',
		scope: {
			item: "=item"
		}
	}
});