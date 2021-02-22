
app.controller('showReportController',function ($scope)
{
  $scope.get=function()
  {
    JSON.parse(localStorage.getItem('userReport'));
    
  }
    $scope.reports = [
      {
        data: "99/08/11",
        family: "فائزه فیروزی فر",
        report: "اشنایی با انگولار ",
      },
      {
        data: "99/08/11",
        family: "فائزه فیروزی فر",
        report: "اشنایی با انگولار ",
      },
      {
        data: "99/08/11",
        family: "فائزه فیروزی فر",
        report: "اشنایی با انگولار ",
      },
      {
        data: "99/05/13",
        family: "محبوبه علیزاده",
        report: " اشنایی با یو ای کیت ها ",
      },
      {
        data: "99/05/13",
        family: "محبوبه علیزاده",
        report: " اشنایی با یو ای کیت ها ",
      },
      {
        data: "99/05/13",
        family: "محبوبه علیزاده",
        report: " اشنایی با یو ای کیت ها ",
      },
    ];
  });
  
