angular.module('hobbyt.controllers').
config(function($stateProvider) {
  $stateProvider.state('tab.dashboard', {
    url: '/dashboard',
    views: {
      'dashboard': {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      }
    }
  });
}).
controller('DashboardCtrl', ['$scope', function($scope) {

}]);
