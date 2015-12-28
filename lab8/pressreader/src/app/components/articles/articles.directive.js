'use strict';

angular.module('pressreader')
.directive('prArticles', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/articles/articles.html',
		controller: function($scope) {

			$scope.switchViewTo = function(opt) {
				console.log(opt);
			};
		}
	}
})
.directive('prReadMore', function() {
	return {
		restrict: 'A',
		link: function(scope, el, attr, ctrlr) {
			el.on('click', function(event) {
				console.log(scope.post);
			});
		}
	}
});