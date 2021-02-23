app.controller("registerController", function ($scope) {
    $scope.register = function () {
      var users = JSON.parse(localStorage.getItem("users"));
  
      users = !users ? [] : users;
      var b = {
        name: $scope.myName,
        email: $scope.myEmail,
        pass: $scope.myPass,
      };
      users.push(b);
      localStorage.setItem("users", JSON.stringify(users));
      var users = JSON.parse(localStorage.getItem("users"));
      alert("عضویت با موفقیت انجام شد");
    };
    $scope.left = function () {
      alert("Are you sure you want to cancel?..");
    };
  });
  