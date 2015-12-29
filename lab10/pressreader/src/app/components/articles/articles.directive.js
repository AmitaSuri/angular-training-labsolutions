'use strict';

angular.module('pressreader')
.directive('prArticles', ['$timeout', '$rootScope', '$mdDialog', function($timeout, $rootScope, $mdDialog) {
	return {
		restrict: 'E',
		templateUrl: 'app/components/articles/articles.html',
		controller: function($scope) {

			$scope.viewOpts = [
				{name: 'list', desc: 'List View'}, 
				{name: 'card', desc: 'Card View'}
			];
			$scope.isListView = true;
			$scope.items = [];

			$scope.switchViewTo = function(opt) {
				console.log(opt);

				if (opt.name === "list") {
					$scope.isListView = true;			
				}

				if (opt.name === "card") {
					$scope.isListView = false;	
				}
			};

			$scope.addTab = function(post) {
				console.log('addTab');

				//check if the post already opened
				var l = $scope.items.length;
				var idx = -1;
				for (var i=0; i<l; i++) {
					if ($scope.items[i].id === post.id) {
						idx = i;
						break;
					}
				}

				if (idx === -1) {
					$timeout(function() {
						idx = $scope.items.push(post);
					});
				} else {
					idx++;
				}
			};

			$scope.removePostTab = function() {
				console.log('Selected tab: ' + $scope.selectedIndex);

				var confirm = $mdDialog.confirm()
			      .title('Close Tab?')
			      .content('This will close the tab. Do you want to continue?')
			      .ariaLabel('Close Tab')
			      .ok('Yes')
			      .cancel('No');

			    $mdDialog.show(confirm).then(function() {
			      $scope.items.splice($scope.selectedIndex - 1, 1);
			    }, function() {
			      //do nothing
			    });
				
			};
		},
		link: function(scope) {
			$rootScope.$on('closetab', function(e, item) {
				scope.removePostTab();
			});
		}
	}
}])
.directive('prReadMore', ['$timeout', function($timeout) {
	return {
		restrict: 'A',
		link: function(scope, el, attr) {
			el.on('click', function(event) {
				console.log(scope.post);

				scope.$parent.$parent.addTab(scope.post);
			});
		}
	}
}]);