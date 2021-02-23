app.controller("saveReportController", function ($scope) {
  $scope.set = function () {
    var reports = JSON.parse(localStorage.getItem("userReport"));

    reports = !reports ? [] : reports;
    var a = {
      name: $scope.myName,
      data: $scope.mydata,
      decrip: $scope.mytext,
    };
    reports.push(a);
    localStorage.setItem("userReport", JSON.stringify(reports));
    var x = JSON.parse(localStorage.getItem("userReport"));
    alert(" گزارش " + x.name + " ثبت شد ");
  };
  $scope.left = function () {
    alert("Are you sure you want to cancel?..");
  };
});
