'use strict';

angular.module('pressreader')
.directive('prArticle', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/article/article.html',
		scope: {
			item: "=item"
		},
		controller: function($scope) {
			$scope.removePostTab = function() {
				console.log('Selected tab: ', $scope.item);				
			};

			$scope.openOriginalPost = function() {
				console.log('Opening ' + $scope.item.url + ' ...')
				window.open($scope.item.url);
			};
		}
	}
});