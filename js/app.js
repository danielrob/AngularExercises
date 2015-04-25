var app = angular.module('app', []);

app.controller('appController', ['$scope', function ($scope) {
  $scope.helloworld = 'appController says hello world';
}])