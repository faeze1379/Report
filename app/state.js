app.config([
  "$stateProvider",
  "$urlRouterProvider",
  "$locationProvider",
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $urlRouterProvider.otherwise("login");

    $stateProvider
      .state("shared.loginView", {
        url: "/login",
        templateUrl: "../shared/login/loginView.html",
      })
      .state("shared.registerView", {
        url: "/register",
        templateUrl: "../shared/register/registerView.html",
      })
      .state("layout.saveReportView", {
        url: "/saveReport",
        templateUrl: "../layout/saveReport/saveReportView.html",
      })
      .state("layout.showReportView", {
        url: "/showReport",
        templateUrl: "../layout/showReport/showReportView.html",
      })
      .state("layout.listRegisterView", {
        url: "/listRegister",
        templateUrl: "../layout/listRegister/listRegisterView.html",
      })
      .state("shared", {
        abstract: true,
        templateUrl: "../shared/shared.html",
      })
      .state("layout", {
        abstract: true,
        templateUrl: "../layout/layoutView.html",
      });
  },
]);
