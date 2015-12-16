angular.module('pressreader')
.filter('ellipsis', function() {
  return function(input, size) {
    return input.slice(0, size) + "...";
  };
})
.filter('strdate', function() {
  return function(input) {
    return input.replace(' ', 'T');
  };
})
.filter('readmore', function() {
	return function(input) {
	    return input.replace('[…]', '<a class="readmore">Read More...</a>');
	};
});