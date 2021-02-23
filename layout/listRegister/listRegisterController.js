app.controller("showListRegister", function ($scope) {
  $scope.reports = JSON.parse(localStorage.getItem("showListRegister"));
   
});
