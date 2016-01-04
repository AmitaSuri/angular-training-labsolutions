'use strict';

angular.module('pressreader')
.controller('MainCtrl', ['$scope', '$rootScope', '$mdDialog', 'wpsvc', 'settingsStoreSvc', function($scope, $rootScope, $mdDialog, wpsvc, settingsStoreSvc){

  $scope.categories = [];
  $scope.posts = [];
  $rootScope.settings = settingsStoreSvc.get();


  	var me = this;

	$rootScope.$on('categoryselected', function(e, category, count) {
		console.log('Selected category is...', category, count);
		me.getPostsByCategory(category, count);
	});

  $rootScope.$on('showsettings', function(e) {
    console.log('Showing settings..');
    me.showSettings();
  });
 
  $scope.$watch("settings.postcount", function(newValue, oldValue) {
    // console.log('postcount changed to: ' + newValue);

    if (newValue) {
      if ($scope.selectedCategory) {
        $scope.selectedCategory.posts = [];
        $scope.selectedCategory.opened = false;
      }
      me.getPostsByCategory($scope.selectedCategory, newValue);
    }
  });

  this.getCategories = function() {

    var categories = wpsvc.getCategories();
    categories.then(function(response){

      $scope.categories = response.data.categories;

    }, function() {
      console.log('Failed to get categories!');

      $scope.categories = [];
    });

  };

	this.getPostsByCategory = function(category, count) {

		// console.log('getPostsByCategory: ', category, count);

    if (!category) {
      category = {};
      category.title = "All Articles";
    }


    if (category && category.opened) {
      //just collapse the menu
      category.opened = false;
      return;
    }

    if (category && !category.opened) {
      if (category.posts && category.posts.length > 0) {
        //just expand the menu
        category.opened = true;
        return;
      }
    }

    var posts = wpsvc.getPostsByCategory(category.id, count);
    posts.then(function(response){

      $scope.posts = response.data.posts;
      category.posts = $scope.posts;
      category.opened = true;

      $scope.selectedCategory = category;

    }, function() {
      console.log('Failed to get response!');

      $scope.posts = [];
      category.posts = $scope.posts;
      category.opened = false;

      $scope.selectedCategory = category;
    });

	};

  this.showSettings = function(ev) {
    $rootScope.settings = settingsStoreSvc.get();

    $mdDialog.show({
        controller: function($scope, $mdDialog) {
          $scope.settings = $rootScope.settings;

          $scope.answer = function(reply) {
            $scope[reply]();
          };

          $scope.close = function() {
            $mdDialog.hide();
          };

          $scope.save = function() {
            settingsStoreSvc.set($scope.settings);
            $mdDialog.hide();
          };

          $scope.cancel = function() {
            $mdDialog.cancel();
          };
        },
        templateUrl: 'app/components/settings/settings.html',
        parent: angular.element(document.body),
        targetEvent: ev
      });
  };



  this.getCategories();
  // this.getPostsByCategory();

}]);