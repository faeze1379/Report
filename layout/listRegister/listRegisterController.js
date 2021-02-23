app.controller("listRegisterController", function ($scope) {
  $scope.users = JSON.parse(localStorage.getItem("users"));
});
