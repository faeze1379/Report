app.controller("loginController", function ($scope,$state) {
  $scope.login = function () {
    var users = JSON.parse(localStorage.getItem("users"));
    var b;

    for (var i = 0; i < users.length; i++) {
      if (users[i].name === $scope.myName && users[i].pass === $scope.myPass) {
        console.log(users[i]);
        var l = 1;
        $state.go('layout.saveReportView');
        break;
      }
    }
    if (l != 1) alert("رمز ورود یا نام کاربری صحیح نیست");
  };
});
