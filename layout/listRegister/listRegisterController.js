app.controller("listRegisterController", function ($scope, $state) {
  $scope.users = JSON.parse(localStorage.getItem("users"));
  $scope.delete = function (record) {
    var users = JSON.parse(localStorage.getItem("users"));
    //console.log(users)
    var index = users.findIndex(function (item) {
      return item.name == record.name;
    });
    users.splice(index, 1);

    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    $scope.users = JSON.parse(localStorage.getItem("users"));
  };

  $scope.updating = function (record) {
    var users = JSON.parse(localStorage.getItem("users"));
    var index = users.findIndex(function (item) {
      return item.name == record.name;
    });

    var c = {
      name: users[index].name,
      email: users[index].email,
      pass: users[index].pass,
    };
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(c));
    $scope.users = JSON.parse(localStorage.getItem("users"));
    $state.go("layout.updateView");
  };
});
