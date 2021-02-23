app.controller("loginController", function ($scope,$state) {
  $scope.login = function () {
    var users = JSON.parse(localStorage.getItem("users"));
    var b;

    for (var i = 0; i < users.length; i++) {
      if (users[i].name === $scope.myName && users[i].pass === $scope.myPass) {
        var is_bool = 1;
        $state.go('layout.saveReportView');
        break;
      }
    }
    if (is_bool != 1) alert("رمز ورود یا نام کاربری صحیح نیست");
  };
});
