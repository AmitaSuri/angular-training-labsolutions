'use strict';

angular.module('pressreader')
.factory('wpsvc', ['$http', function($http) {

	var BASE_URL = "http://touchdemo.walkingtree.in/Training/?callback=JSON_CALLBACK";
	var GET_POSTS = BASE_URL + "&json=get_posts";
	var GET_CATEGORIES = BASE_URL + "&json=get_category_index";


	var getCategories = function(count) {

		return $http.jsonp(GET_CATEGORIES, {
			params: {
				count: count
			}
		});

	};

	var getPostsByCategory = function(categoryId, count) {
		return $http.jsonp(GET_POSTS, {
			params: {
				cat: categoryId,
				count: count
			}
		});
	};

	return {
		getCategories: getCategories,
		getPostsByCategory: getPostsByCategory
	};

}]);