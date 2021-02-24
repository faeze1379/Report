app.controller("updateController", function ($scope) {
  $scope.users = JSON.parse(localStorage.getItem("users"));
  var user=JSON.parse(localStorage.getItem("user"));
  $scope.myName=user.name
  $scope.Email=user.email
  $scope.Pass=user.pass
  
  $scope.update = function () {
  var users = JSON.parse(localStorage.getItem("users"));
  JSON.parse(localStorage.getItem("user"));
  var c = {
  name: $scope.myName,
  email: $scope.Email,
  pass: $scope.Pass
  };
  localStorage.setItem("user", JSON.stringify(c));
  JSON.parse(localStorage.getItem("user"));
  users.push(c);
  localStorage.setItem("users", JSON.stringify(users));
  }
  });
