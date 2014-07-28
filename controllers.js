(function () {
  var app = angular.module('tasksApp', []);

  app.controller('TasksController', function ($scope, $http) {
    $scope.tasks = {};


    $scope.getTasks = function () {
      $http({method: 'GET', url: 'http://107.170.31.184:8080/api/tasks'})
        .success(function (data) {
          $scope.tasks = data;
        });
    };

    $scope.trClass = function (index) {
      if (index % 2 === 0) {
        return "even"
      } else {
        return "odd"
      }
    };

    $scope.createTask = function () {
      data = $scope.task;
      $http.post("http://107.170.31.184:8080/api/tasks", data).success(function (response) {
        $scope.tasks.push({"Name": response.Name, "Description": response.Description});
        $scope.task = {};
      });
    };
  });
})();