angular.module('hobbyt.controllers').
config(function($stateProvider) {
  $stateProvider.state('tab.friend', {
    url: '/friend/:id',
    views: {
      'friends': {
        templateUrl: 'app/friend/friend.html',
        controller: 'FriendCtrl'
      }
    }
  });
}).
controller('FriendCtrl', ['$scope', '$stateParams', 'Friends', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.id);
}]);
