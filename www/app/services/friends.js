angular.module('hobbyt.services').
factory('Friends', function() {
  var _friends = [{
    id: 0,
    name: 'Scruff McGruff'
  }, {
    id: 1,
    name: 'G.I. Joe'
  }, {
    id: 2,
    name: 'Miss Frizzle'
  }, {
    id: 3,
    name: 'Ash Ketchum'
  }];

  return {
    all: function() {
      return _friends;
    },
    get: function(id) {
      return _friends[id];
    }
  };
});
