angular.module('hobbyt.controllers').
config(function($stateProvider) {
  $stateProvider.state('tab.friend-detail', {
    url: '/friend-detail/:id',
    views: {
      'friend-detail': {
        templateUrl: 'app/friend-detail/friend-detail.html',
        controller: 'FriendDetailCtrl'
      }
    }
  });
}).
controller('FriendDetailCtrl', ['$scope', '$stateParams', 'Friends', function($scope, $stateParams, Friends) {
  debugger;
  $scope.friend = Friends.get($stateParams.id);
}]);
