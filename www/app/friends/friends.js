angular.module('hobbyt.controllers').
config(function($stateProvider) {
  $stateProvider.state('tab.friends', {
    url: '/friends',
    views: {
      'friends': {
        templateUrl: 'app/friends/friends.html',
        controller: 'FriendsCtrl'
      }
    }
  });
}).
controller('FriendsCtrl', ['$scope', 'Friends', function($scope, Friends) {
  $scope.friends = Friends.all();
}]);
