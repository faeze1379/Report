app.controller("listRegisterController", function ($scope) {
  $scope.users = JSON.parse(localStorage.getItem("users"));
  $scope.delete=function(record){
    var users=JSON.parse(localStorage.getItem("users"));
    //console.log(users)
    var index = users.findIndex(function(item) {
      return item.name == record.name;
    });
    users.splice(index,1);

    console.log(users);
    localStorage.setItem("users",JSON.stringify(users));
    $scope.users = JSON.parse(localStorage.getItem("users"));
  }
 
});
