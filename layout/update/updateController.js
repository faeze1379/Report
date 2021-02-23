app.controller("updateController", function ($scope) {
  $scope.users = JSON.parse(localStorage.getItem("users"));
  $scope.update = function (record) {
    var users=JSON.parse(localStorage.getItem("users"));
    //console.log(users)
    var index = users.findIndex(function(item) {
      return item.name == record.name;
    });
    users.update(index,1);

    var a = {
      name: $scope.myName,
      email: $scope.email,
      Pass: $scope.Pass,
    };
    users.push(a);
     console.log(users);
    localStorage.setItem("users",JSON.stringify(users));
    $scope.users = JSON.parse(localStorage.getItem("users"));
  };
  });
