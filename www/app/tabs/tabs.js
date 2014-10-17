angular.module('hobbyt.controllers').
config(function($stateProvider) {
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'app/tabs/tabs.html'
  });
});
