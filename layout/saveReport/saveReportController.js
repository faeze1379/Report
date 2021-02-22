app.controller("saveReportController", function ($scope) {
  $scope.set = function () {
    var a = {
      name: $scope.myName,
      data: $scope.mydata,
      decrip: $scope.mytext,
    }
    localStorage.setItem("userReport", JSON.stringify(a));
    var x=JSON.parse(localStorage.getItem("userReport"));
    alert(" گزارش " + x.name +" ثبت شد ")
  };
  $scope.left = function () {
    alert("Are you sure you want to cancel?..");
  };
});
