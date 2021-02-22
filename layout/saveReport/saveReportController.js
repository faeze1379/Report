app.controller("saveReportController", function ($scope) {
  $scope.set = function () {
    var b=[]
    var a = {
      name: $scope.myName,
      data: $scope.mydata,
      decrip: $scope.mytext,
    }
    localStorage.setItem("userReport", JSON.stringify(a));
    
    
  };
  //   $scope.get=function()
  //   {
  //     var x=JSON.parse(localStorage.getItem('userReport'));
  //   }
  $scope.save = function () {
    alert("saved..");
  };
  $scope.left = function () {
    alert("Are you sure you want to cancel?..");
  };
});
