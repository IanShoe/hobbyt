angular.module('hobbyt.services').
factory('Categories', function() {
  var _categories = [{
    name: 'Athletic Sports',
    items: ['s1', 's2'],
    id: 'c1'
  },
  {
    name: 'Video Games',
    items: ['h7', 'h8', 'h9'],
    id: 'c2'
  }];

  return {
    all: function() {
      return _categories;
    },
    get: function(id) {
      for(var i = 0; i < _categories.length; i++) {
        if(_categories[i].id === id) {
          return _categories[i];
        }
      }
    }
  };
});
