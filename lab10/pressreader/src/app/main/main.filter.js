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
	    return input.replace('&hellip;', '<a class="readmore">Read More...</a>');
	};
})
.filter('hellip2ellipsis', function() {
	return function(input) {
	    return input.replace('[…]', '...');
	};
});