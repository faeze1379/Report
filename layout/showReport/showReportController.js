app.controller("showReportController", function ($scope) {
  var x=[]
   x = JSON.parse(localStorage.getItem("userReport"));
   
  $scope.reports = [
    {
      data: x.name,
      family: x.data,
      report: x.decrip,
    },
  ];
});
