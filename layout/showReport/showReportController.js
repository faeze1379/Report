app.controller("showReportController", function ($scope) {
  $scope.reports = JSON.parse(localStorage.getItem("userReport"));
   
});
