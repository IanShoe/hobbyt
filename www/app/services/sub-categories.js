angular.module('hobbyt.services').
factory('SubCategories', function() {
  var _subCategories = [{
    name: 'Ball Sports',
    items: ['h1', 'h2', 'h3', 'h4'],
    id: 's1'
  },
  {
    name: 'Combat Sports',
    items: ['h5', 'h6'],
    id: 's2'
  }];

  return {
    all: function() {
      return _subCategories;
    },
    get: function(id) {
      for(var i = 0; i < _subCategories.length; i++) {
        if(_subCategories[i].id === id) {
          return _subCategories[i];
        }
      }
    }
  };
});
