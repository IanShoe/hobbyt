angular.module('hobbyt.controllers').
config(function($stateProvider) {
  $stateProvider.state('tab.account', {
    url: '/account',
    views: {
      'account': {
        templateUrl: 'app/account/account.html',
        controller: 'AccountCtrl'
      }
    }
  });
}).
controller('AccountCtrl', ['$scope', function($scope) {

}]);
