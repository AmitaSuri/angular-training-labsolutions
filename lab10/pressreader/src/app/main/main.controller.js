'use strict';

angular.module('pressreader')
.controller('MainCtrl', ['$scope', '$rootScope', '$mdDialog', 'wpsvc', function($scope, $rootScope, $mdDialog, wpsvc){

  $scope.categories = [];
  $scope.posts = [];


  	var me = this;

	$rootScope.$on('categoryselected', function(e, category) {
		console.log('Selected category is...', category);
		me.getPostsByCategory(category);
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

	this.getPostsByCategory = function(category) {

		console.log('getPostsByCategory: ', category);

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

    var posts = wpsvc.getPostsByCategory(category.id);
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



  this.getCategories();
  this.getPostsByCategory();

}]);