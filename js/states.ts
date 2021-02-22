app
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $locationProvider.hashPrefix('');
            $urlRouterProvider
                .otherwise('login');

            $stateProvider
                //.state('home', {
                //    url: '/home',
                //    templateUrl: 'partial-home.html'
                //})

                .state("error", {
                    url: "/error",
                    templateUrl: '/app/views/error.html?ver=1.0',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_uikit'
                            ]);
                        }]
                    }
                })

                .state("error.404", {
                    url: "/404",
                    templateUrl: '/app/components/pages/error_404View.html?ver=1.0'
                })

                .state("error.500", {
                    url: "/500",
                    templateUrl: '/app/components/pages/error_500View.html?ver=1.0'
                })

                .state("logout", {
                    url: "/logout",
                    template: 'Please Wait...',
                    resolve: {
                        deps: ['$rootScope', '$state', function ($rootScope, $state) {
                            $rootScope.logout();
                            window.location.reload();
                        }]
                    },
                    data: {
                        pageTitle: 'ورود به سامانه'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                .state("restricted", {
                    abstract: true,
                    url: "",
                    templateUrl: '/ClientApp/Planning/templates/restricted.html?Ver=' + appVersion,

                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                // 'mainFiles',
                                '/libs/uikit/js/uikit.min.js',
                                // uikit components
                                '/libs/uikit/js/components/accordion.min.js',
                                '/libs/uikit/js/components/autocomplete.min.js',
                                '/libs/uikit/js/components/form-password.min.js',
                                '/libs/uikit/js/components/form-select.min.js',
                                '/libs/uikit/js/components/grid.min.js',
                                '/libs/uikit/js/components/lightbox.min.js',
                                '/libs/uikit/js/components/nestable.min.js',
                                '/libs/uikit/js/components/notify.min.js',
                                '/libs/uikit/js/components/slider.min.js',
                                '/libs/uikit/js/components/slideshow.min.js',
                                '/libs/uikit/js/components/sortable.min.js',
                                '/libs/uikit/js/components/sticky.min.js',
                                '/libs/uikit/js/components/tooltip.min.js',
                                '/libs/uikit/js/components/upload.min.js',
                                '/assets/css/style.css?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/UserInformationService.js?Ver=" + appVersion,
                                "/build/ClientApp/app/restricted/restrictedController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/NotificationService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Directives/Pageination/PageinationController.js?Ver=' + appVersion,
                            ]);
                        }]
                    }
                })

                .state("login", {
                    url: "/login",
                    templateUrl: '/ClientApp/Planning/login/loginView.html?Ver=' + appVersion,
                    controller: 'LoginController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/assets/css/pages/login.css?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/AuthenticationService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/login/loginController.js?Ver=' + appVersion
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'ورود به سامانه'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("Studentlogin", {
                    url: "/Studentlogin",
                    templateUrl: '/ClientApp/Planning/login/StudentLogin/StudentLoginView.html?Ver=' + appVersion,
                    controller: 'StudentLoginController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/assets/css/pages/login.css?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/AuthenticationService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/login/StudentLogin/StudentLoginController.js?Ver=' + appVersion
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'ورود به سامانه'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("register", {
                    url: "/register/{UserName}",
                    templateUrl: '/ClientApp/Planning/login/registerNewUser/registerNewUserView.html?Ver=' + appVersion,
                    controller: 'RegisterNewUserController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/assets/css/pages/login.css?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/AuthenticationService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/login/registerNewUser/registerNewUserController.js?Ver=' + appVersion
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'ورود دانش آموز به سامانه'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.assistantReportsEdition", {
                    url: "/AssistantReportsEdition",
                    templateUrl: '/ClientApp/Planning/ASS/assistantReports/assistantReportsEdition/assistantReportsEditionView.html?Ver=' + appVersion,
                    controller: 'AssistantReportsEditionController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Core/base/services/oldService/assistantReportsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/DailyWorkReportService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/ASS/assistantReports/assistantReportsEdition/assistantReportsEditionController.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("Home", {
                    url: "/Home",
                    templateUrl: 'ClientApp/Site/Home/HomeView.html?Ver=' + appVersion,
                    controller: 'HomeController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Site/Home/HomeController.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.dashboard", {
                    url: "/dashboard",
                    templateUrl: '/ClientApp/Planning/dashboard/dashboardView.html?Ver=' + appVersion,
                    controller: 'DashboardController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/StudentStatistics/StudentStatisticsDirective.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/RangeStatisticsChart/RangeStatisticsChartDirective.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/AssistantFileCenteredsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/paymentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/supporterLeadersService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/oldService/usersService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/callDayReportsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/studentVotesService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/dashboard/dashboardController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/ASS/modalAssistantReports/modalAssistantReportsController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/oldService/assistantReportsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/DailyWorkReportService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/StatisticsCard/StatisticsCardDirective.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/AssistantPaymentService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/DailyCallReportService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/AssistantPaymentChartsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=" + appVersion,
                                //"/build/ClientApp/Planning/Core/base/services/DailyCallReportService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/AssistantService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/leaderAssistantsService.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.menuLinks", {
                    url: "/CNT/MenuLinks",
                    templateUrl: '/ClientApp/Planning/CNT/menuLinks/menuLinksView.html?Ver=' + appVersion,
                    controller: 'MenuLinksController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Core/base/services/menuLinksService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/CNT/menuLinks/menuLinksController.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.webPages", {
                    url: "/CNT/WebPages",
                    templateUrl: '/ClientApp/Planning/CNT/WebPages/WebPagesView.html?Ver=' + appVersion,
                    controller: 'WebPagesController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/CNT/WebPages/WebPagesController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/WebPagesService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/ClientWebPageType.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.webPagesEdition", {
                    url: "/CNT/webPagesEdition/{id:int}",
                    params: { id: { value: null, squash: true } },
                    templateUrl: '/ClientApp/Planning/CNT/WebPages/WebPageEdition/WebPageEditionView.html?Ver=' + appVersion,
                    controller: 'WebPagesEditionController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/CNT/WebPages/WebPageEdition/WebPageEditionController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/WebPagesService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/ClientWebPageType.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                .state("restricted.supportTicketList", {
                    url: "/TKC/SupportTicketList",
                    templateUrl: '/ClientApp/Planning/TKC/SupportTickets/SupportTicketList/SupportTicketListView.html?Ver=' + appVersion,
                    controller: 'SupportTicketListController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
//"/build/ClientApp/Planning/Core/base/services/SupportTicketsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/TKC/SupportTickets/SupportTicketList/SupportTicketListController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Directives/Pageination/PageinationController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/SupporterTicketService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketStatus.js?Ver=" + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                .state("restricted.HandlerTicketList", {
                    url: "/TKC/HandlerTicketList",
                    templateUrl: '/ClientApp/Planning/TKC/HandlerTicketList/HandlerTicketListView.html?Ver=' + appVersion,
                    controller: 'HandlerTicketListController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                //"/build/ClientApp/Planning/Core/base/services/SupportTicketsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/TKC/HandlerTicketList/HandlerTicketListController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Directives/Pageination/PageinationController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/SupporterHandlingTicketService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketStatus.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/TicketCategoryType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/SupportDepartmentsService.js?Ver=" + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })






                .state("restricted.chatRoom", {
                    url: "/CHR/ChatRoom",
                    templateUrl: '/ClientApp/Planning/CHR/chatRoom/chatRoomView.html?Ver=' + appVersion,
                    controller: 'ChatRoomController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/ChatMessagesService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/ChatRoomsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/CHR/chatRoom/chatRoomController.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                .state("restricted.supportTicketEdition", {
                    url: "/TKC/SupportTicketEdition/{TicketID}",
                    templateUrl: '/ClientApp/Planning/TKC/SupportTickets/SupportTicketEdition/SupportTicketEditionView.html?Ver=' + appVersion,
                    controller: 'SupportTicketEditionController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketStatus.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketStatusPriority.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/SupportDepartmentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/SupportTicketCommentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/TKC/SupportTickets/SupportTicketEdition/SupportTicketEditionController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/SupporterTicketService.js?Ver=" + appVersion,
                                //"/build/ClientApp/Planning/Core/webapi/koosha/services/SupporterTicketService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })




                .state("restricted.supportTicketNew", {
                    url: "/TKC/NewSupportTicket/",
                    templateUrl: '/ClientApp/Planning/TKC/SupportTickets/SupportTicketEdition/SupportTicketEditionView.html?Ver=' + appVersion,
                    controller: 'SupportTicketEditionController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketStatus.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketStatusPriority.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/SupportDepartmentsService.js?Ver=" + appVersion,
                               // "/build/ClientApp/Planning/Core/base/services/SupportTicketsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/SupportTicketCommentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/TKC/SupportTickets/SupportTicketEdition/SupportTicketEditionController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/SupporterTicketService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/SupporterTicketService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.HandlerTicket", {
                    url: "/TKC/HandlerTicket/{id:int}",
                    templateUrl: '/ClientApp/Planning/TKC/HandlerTicket/HandlerTicketView.html?Ver=' + appVersion,
                    controller: 'HandlerTicketController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketStatus.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketStatusPriority.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/SupportDepartmentsService.js?Ver=" + appVersion,
                                //"/build/ClientApp/Planning/Core/base/services/SupportTicketsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/SupportTicketCommentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/TKC/HandlerTicket/HandlerTicketController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/SupporterHandlingTicketService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/SupportDepartmentsService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                .state("restricted.orderEdition", {
                    url: "/PCK/orderEdition/{StudentUserID}/?Type={PackageOrderType}",
                    templateUrl: '/ClientApp/Planning/PCK/orderEdition/orderEditionView.html?Ver=' + appVersion,
                    controller: 'OrderEditionController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([

                                "/build/ClientApp/Planning/Core/base/models/enums/PackageOrderPostSendType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/PackageOrderType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/PackageProductsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/PackageProductCategoryService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/PackageOrdersService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/BanksService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/UserAddressesService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/StateCitysService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/UsersService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/PCK/orderEdition/orderEditionController.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })



                .state("themeKitFormControlTextBox", {
                    url: "/ThemeKit/FormControl/TextBox",
                    templateUrl: '/ClientApp/themeKit/formControls/textBox/themeKitTextBoxView.html?Ver=' + appVersion,
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([]);
                        }]
                    },
                    data: {
                        pageTitle: 'داشبورد'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.tickets", {
                    url: "/TKC/Tickets/Ticket/{TicketID}",
                    templateUrl: '/ClientApp/Planning/TKC/Tickets/TicketView.html?Ver=' + appVersion,
                    controller: 'TicketController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                //"/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketStatus.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupportTicketStatusPriority.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/SupportDepartmentsService.js?Ver=" + appVersion,
                                //"/build/ClientApp/Planning/Core/base/services/SupportTicketsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/SupportTicketCommentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/TKC/Tickets/TicketController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/SupporterTicketService.js?Ver=" + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'تیکت'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                .state("restricted.Personalization", {
                    url: "/Personalization",
                    templateUrl: '/ClientApp/Planning/Personalization/PersonalizationView.html?Ver=' + appVersion,
                    controller: 'PersonalizationController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Personalization/PersonalizationController.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'سفارشی سازی'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })




                .state("restricted.FAQEdition", {
                    url: "/FAQ/Edition/{id:int}",
                    params: { id: { value: null, squash: true } },
                    templateUrl: '/ClientApp/Planning/FAQ/FAQ addition/FAQadditionView.html?Ver=' + appVersion,
                    controller: 'FAQadditionController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/FAQ/FAQ addition/FAQadditionController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/FrequentlyAskedQuestionService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/FrequentlyAskedQuestionCategoryService.js?Ver=" + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'سفارشی سازی'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.FAQManegment", {
                    url: "/FAQ/FAQManegment",
                    templateUrl: '/ClientApp/Planning/FAQ/FAQ addition/FAQManegment/FAQManegmentView.html?Ver=' + appVersion,
                    controller: 'FAQManegmentController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/FAQ/FAQ addition/FAQManegment/FAQManegmentController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/FrequentlyAskedQuestionService.js?Ver=" + appVersion,
                                //"/build/ClientApp/Planning/Core/webapi/koosha/services/FrequentlyAskedQuestionCategoryService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'سفارشی سازی'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.FAQcategory", {
                    url: "/FAQ/FAQcategory/{id:int}",
                    params: { id: { value: null, squash: true } },
                    templateUrl: '/ClientApp/Planning/FAQ/FAQ category/FAQcategoryView.html?Ver=' + appVersion,
                    controller: 'FAQcategoryController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/FAQ/FAQ category/FAQcategoryController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/FrequentlyAskedQuestionCategoryService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'سفارشی سازی'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.FAQCategoryEdition", {
                    url: "/FAQ/FAQCategoryEdition/{id:int}",
                    params: { id: { value: null, squash: true } },
                    templateUrl: '/ClientApp/Planning/FAQ/FAQ category/FAQCategoryEdition/FAQCategoryEditionView.html?Ver=' + appVersion,
                    controller: 'FAQCategoryEditionController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/FAQ/FAQ category/FAQCategoryEdition/FAQCategoryEditionController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/FrequentlyAskedQuestionCategoryService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'سفارشی سازی'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.FAQ", {
                    url: "/FAQ",
                    templateUrl: '/ClientApp/Planning/FAQ/FAQ List/FAQListView.html?Ver=' + appVersion,
                    controller: 'FAQListController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/FAQ/FAQ List/FAQListController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/FrequentlyAskedQuestionService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'سفارشی سازی'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.City", {
                    url: "/LOG/City",
                    templateUrl: '/ClientApp/Planning/LOG/City/CityView.html?Ver=' + appVersion,
                    controller: 'CityController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/LOg/City/CityController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CityService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.Province", {
                    url: "/LOG/Province",
                    templateUrl: '/ClientApp/Planning/LOG/Province/ProvinceView.html?Ver=' + appVersion,
                    controller: 'ProvinceController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/LOG/Province/ProvinceController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.studentBases", {
                    url: "/BAS/StudentBases",
                    templateUrl: '/ClientApp/Planning/BAS/studentBases/studentBasesView.html?Ver=' + appVersion,
                    controller: 'StudentBasesController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/base/services/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/BAS/studentBases/studentBasesController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/StudentBasesService.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.studentFields", {
                    url: "/BAS/StudentFields",
                    templateUrl: '/ClientApp/Planning/BAS/studentFields/studentFieldsView.html?Ver=' + appVersion,
                    controller: 'StudentFieldsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/base/services/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/BAS/studentFields/studentFieldsController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/StudentFieldService.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })



                .state("restricted.courses", {
                    url: "/BAS/Courses",
                    templateUrl: '/ClientApp/Planning/BAS/courses/coursesView.html?Ver=' + appVersion,
                    controller: 'CoursesController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Core/base/services/CourseChapterService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/coursesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/BAS/courses/coursesController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/CourseChapterService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/CoursesService.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.leaderAssistants", {
                    url: "/ASS/Leader",
                    templateUrl: '/ClientApp/Planning/ASS/leaderAssistants/leaderAssistantsView.html?Ver=' + appVersion,
                    controller: 'LeaderAssistantsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/leaderAssistantsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/ASS/leaderAssistants/leaderAssistantsController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                .state("restricted.subsetPaymentReports", {
                    url: "/ASS/SubsetPaymentReports",
                    templateUrl: '/ClientApp/Planning/ASS/subsetPaymentReports/SubsetPaymentReportsView.html?Ver=' + appVersion,
                    controller: 'SubsetPaymentReportsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/ASS/paymentReports/PaymentReportsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/paymentsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/ASS/subsetPaymentReports/SubsetPaymentReportsController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.payments", {
                    url: "/ASS/Payments",
                    templateUrl: '/ClientApp/Planning/ASS/payments/paymentsView.html?Ver=' + appVersion,
                    controller: 'PaymentsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/base/services/paymentsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/ASS/payments/paymentsController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.assistants", {
                    url: "/ASS/Assistants",
                    templateUrl: '/ClientApp/Planning/ASS/assistants/assistantsView.html?Ver=' + appVersion,
                    controller: 'AssistantsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/SEC/addUser/addUserController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/ASS/assistants/assistantsController.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                .state("restricted.paymentDetails", {
                    url: "/ASS/PaymentDetails/{AssistantID}",
                    templateUrl: '/ClientApp/Planning/ASS/paymentDetails/paymentDetailsView.html?Ver=' + appVersion,
                    controller: 'PaymentDetailsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([

                                "/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/paymentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/ASS/paymentDetails/paymentDetailsController.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.assistantDetails", {
                    url: "/ASS/AssistantDetails/{AssistantID}",
                    templateUrl: '/ClientApp/Planning/ASS/assistantDetails/assistantDetailsView.html?Ver=' + appVersion,
                    controller: 'AssistantDetailsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Core/base/services/AssistantFileCenteredsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/studentVotesService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/StudentStatistics/StudentStatisticsDirective.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/RangeStatisticsChart/RangeStatisticsChartDirective.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/paymentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/oldService/usersService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/supporterLeadersService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/callDayReportsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/oldService/assistantReportsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/ASS/modalAssistantReports/modalAssistantReportsController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/ASS/assistantDetails/assistantDetailsController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/DailyWorkReportService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/StatisticsCard/StatisticsCardDirective.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/AssistantPaymentService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/DailyCallReportService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/AssistantPaymentChartsService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/AssistantService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/leaderAssistantsService.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.compareBranches", {
                    url: "/Payment/compareBranches/{type}/{callOrPayment}",
                    templateUrl: '/ClientApp/Planning/payment/compareBranches/compareBranchesView.html?Ver=' + appVersion,
                    controller: 'CompareBranchesController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Directives/Pageination/PageinationController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/paymentsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/callDayReportsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/payment/compareBranches/compareBranchesController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/PaymentService.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.callDayReports", {
                    url: "/REP/CallDayReports/{UserID}",
                    templateUrl: '/ClientApp/Planning/REP/callDayReports/callDayReportsView.html?Ver=' + appVersion,
                    controller: 'CallDayReportsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/base/services/oldService/usersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/callDayReportsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/REP/callDayReports/callDayReportsController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.userSetting", {
                    url: "/SEC/UserSetting",
                    templateUrl: '/ClientApp/Planning/SEC/userSetting/userSettingView.html?Ver=' + appVersion,
                    controller: 'UserSettingController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Core/base/services/UserContactService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/SEC/userSetting/userSettingController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.userProfile", {
                    url: "/SEC/UserProfile/{UserID}",
                    templateUrl: '/ClientApp/Planning/SEC/userProfile/userProfileView.html?Ver=' + appVersion,
                    controller: 'UserProfileController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Core/base/services/UsersService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/SEC/userProfile/userProfileController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/UserStatus.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.users", {
                    url: "/SEC/Users",
                    templateUrl: '/ClientApp/Planning/SEC/users/usersView.html?Ver=' + appVersion,
                    controller: 'UsersController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/base/services/oldService/usersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/SEC/users/usersController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.customSMSSend", {
                    url: "/SMS/CustomSMSSend",
                    templateUrl: '/ClientApp/Planning/SMS/customSMSSend/customSMSSendView.html?Ver=' + appVersion,
                    controller: 'CustomSMSSendController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/SMSService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/SMS/customSMSSend/customSMSSendController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.searchStudents", {
                    url: "/STU/SearchStudents",
                    templateUrl: '/ClientApp/Planning/STU/searchStudents/searchStudentsView.html?Ver=' + appVersion,
                    controller: 'SearchStudentsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/supporterLeadersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/searchStudents/searchStudentsController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/WebPagesService.js?Ver=" + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.students", {
                    url: "/STU/Students/{StudentStatus}/{subset}/{AssistantID}",
                    templateUrl: '/ClientApp/Planning/STU/students/studentsView.html?Ver=' + appVersion,
                    controller: 'StudentsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/StudentPaymentOverviewService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/StudentsService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/usersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/students/studentsController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })



                .state("restricted.studentEdition", {
                    url: "/STU/studentEdition/?studentNationalID",
                    templateUrl: '/ClientApp/Planning/STU/studentEdition/studentEditionView.html?Ver=' + appVersion,
                    controller: 'StudentEditionController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/studentEdition/studentEditionController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })



                .state("restricted.myStudents", {
                    url: "/STU/MyStudents/:StudentStatus/:subset/:AssistantID?",
                    templateUrl: '/ClientApp/Planning/STU/students/studentsView.html?Ver=' + appVersion,
                    controller: 'StudentsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/StudentPaymentOverviewService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/StudentsService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/usersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/students/studentsController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.StudentDetails", {
                    url: "/STU/StudentDetails/{StudentID:int}",
                    templateUrl: '/ClientApp/Planning/STU/StudentDetails/StudentDetailsView.html?Ver=' + appVersion,
                    controller: 'StudentDetailsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/InvoiceType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/StudentCourseExamService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/AssistantFileCenteredsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/StudentAssistantService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/PackageOrderType.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/STU/dialogStudentReports/dialogStudentReportsController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/studentAssistantHistory/studentAssistantHistoryController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentMemosService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/studentVotes/studentVotesController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentVotesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentReportsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/usersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/StudentDetails/StudentDetailsController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/StudentsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/FileCenterStatus.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryTypePackageManager.js?Ver=' + appVersion,


                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })




                .state("restricted.studentStatusDetails", {
                    url: "/STU/StudentStatusDetails/{id}",
                    templateUrl: '/ClientApp/Planning/STU/studentStatusDetails/studentStatusDetailsView.html?Ver=' + appVersion,
                    controller: 'StudentStatusController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/StudentCourseExamService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/AssistantFileCenteredsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/StudentAssistantService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/PackageOrderType.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/STU/dialogStudentReports/dialogStudentReportsController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/studentAssistantHistory/studentAssistantHistoryController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentMemosService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/studentVotes/studentVotesController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentVotesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentReportsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/usersService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/studentStatusDetails/studentStatusDetailsController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("StudentWorkReport", {
                    url: "/STU/StudentWorkReport",
                    templateUrl: '/ClientApp/Planning/STU/StudentWorkReport/StudentWorkReportPWA.html?Ver=' + appVersion,
                    controller: 'StudentWorkReportController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/STU/StudentWorkReport/StudentWorkReportController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("submitReport", {
                    url: "/STU/SubmitReport",
                    templateUrl: '/ClientApp/Planning/STU/StudentWorkReport/submitReport/submitReportView.html?Ver=' + appVersion,
                    controller: 'submitReportController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/Countquestion/CountquestionController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/TimePicker/TimePickerController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/STU/StudentWorkReport/submitReport/submitReportController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("StudentPerformance", {
                    url: "/STU/StudentPerformance",
                    templateUrl: '/ClientApp/Planning/STU/studentPreformance/StudentPerformanceView.html?Ver=' + appVersion,
                    controller: 'StudentPerformanceController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/PWAMenu/PWAMenuController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/STU/studentPreformance/StudentPerformanceController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/studentPanel/FeedBack/FeedBackController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/StudentDailyReportsService.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("studentExam", {
                    url: "/STU/studentExam",
                    templateUrl: '/ClientApp/Planning/STU/studentPanel/studentExam/studentExamView.html?Ver=' + appVersion,
                    controller: 'studentExamController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/PWAMenu/PWAMenuController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/STU/studentPanel/studentExam/studentExamController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/studentPanel/FeedBack/FeedBackController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("submitExamResult", {
                    url: "/STU/submitExamResult",
                    templateUrl: '/ClientApp/Planning/STU/studentPanel/submitExamResult/submitExamResultView.html?Ver=' + appVersion,
                    controller: 'submitExamResultController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/PWAMenu/PWAMenuController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/STU/studentPanel/submitExamResult/submitExamResultController.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("Rewards", {
                    url: "/Rewards",
                    templateUrl: '/ClientApp/Planning/STU/studentPanel/Rewards/RewardsView.html?Ver=' + appVersion,
                    controller: 'RewardsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/PWAMenu/PWAMenuController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/STU/studentPanel/FeedBack/FeedBackController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/studentPanel/Rewards/RewardsController.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("Extracurricular", {
                    url: "/Extracurricular",
                    templateUrl: '/ClientApp/Planning/STU/studentPanel/Extracurricular/ExtracurricularView.html?Ver=' + appVersion,
                    controller: 'ExtracurricularController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/PWAMenu/PWAMenuController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/STU/studentPanel/Extracurricular/ExtracurricularController.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("ProfileUser", {
                    url: "/ProfileUser",
                    templateUrl: '/ClientApp/Planning/STU/studentPanel/UserProfile/UserProfileView.html?Ver=' + appVersion,
                    controller: 'ProfileUserController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/PWAMenu/PWAMenuController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/STU/studentPanel/UserProfile/ProfileUserController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/STU/studentPanel/FeedBack/FeedBackController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/StudentsService.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("ExamResult", {
                    url: "/STU/ExamResult",
                    templateUrl: '/ClientApp/Planning/STU/studentPanel/ResultExam/ResultExamView.html?Ver=' + appVersion,
                    controller: 'ResultExamController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/PWAMenu/PWAMenuController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/STU/studentPanel/ResultExam/ResultExamController.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("FeedBack", {
                    url: "/FeedBack",
                    templateUrl: '/ClientApp/Planning/STU/studentPanel/FeedBack/FeedBackView.html?Ver=' + appVersion,
                    controller: 'FeedBackController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/STU/studentPanel/FeedBack/FeedBackController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentVotesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/StudentDailyReportsService.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.GroupEvent", {
                    url: "/GroupEvent",
                    templateUrl: '/ClientApp/Planning/STU/GroupEvent/GroupEventView.html?Ver=' + appVersion,
                    controller: 'GroupEventController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/STU/GroupEvent/GroupEventController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/GroupEventService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/AssistantGroupEventType.js?Ver=' + appVersion,


                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.fileManagement", {
                    url: "/FileCenter/fileManagement",
                    templateUrl: '/ClientApp/Planning/ASS/FileCenter/fileManagement/fileManagementView.html?Ver=' + appVersion,
                    controller: 'fileManagementController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/ASS/FileCenter/fileManagement/fileManagementController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/FileManagementService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/FileCenterStatus.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryTypePackageManager.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.FilePackageManager", {
                    url: "/FileCenter/FilePackageManager",
                    templateUrl: '/ClientApp/Planning/ASS/FileCenter/FilePackageManager/FilePackageManagerView.html?Ver=' + appVersion,
                    controller: 'FilePackageManagerController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/ASS/FileCenter/FilePackageManager/FilePackageManagerController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/FileCenterStatus.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/FilePackageManagerService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryTypePackageManager.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/AssistantFileCenterType.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.CartableFileManager", {
                    url: "/FileCenter/CartableFileManager",
                    templateUrl: '/ClientApp/Planning/ASS/FileCenter/CartableFilePackageManager/CartableFileManagerView.html?Ver=' + appVersion,
                    controller: 'CartableFileManagerController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/ASS/FileCenter/CartableFilePackageManager/CartableFileManagerController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/FileCenterStatus.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/FilePackageManagerService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryTypePackageManager.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.supporters", {
                    url: "/SUP/Supporters",
                    templateUrl: '/ClientApp/Planning/SUP/supporters/supportersView.html?Ver=' + appVersion,
                    controller: 'SupportersController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/SEC/addUser/addUserController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/Pageination/PageinationController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/oldService/usersService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/SUP/supporters/supportersController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.studentVoteReport", {
                    url: "/SUP/StudentVoteReport",
                    templateUrl: '/ClientApp/Planning/SUP/studentVoteReport/studentVoteReportView.html?Ver=' + appVersion,
                    controller: 'StudentVoteReportController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentVotesService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/SUP/studentVoteReport/studentVoteReportController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.supporterDetails", {
                    url: "/SUP/SupporterDetails/{SupporterID:int}",
                    templateUrl: '/ClientApp/Planning/SUP/supporterDetails/supporterDetailsView.html?Ver=' + appVersion,
                    controller: 'SupporterDetailsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/oldService/usersService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/callDayReportsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/supporterReportsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/supporter/supporterReportModule/supporterReportModuleController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/SUP/supporterDetails/supporterDetailsController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/StudentsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/SupprterManagerType.js?Ver=" + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                .state("restricted.customAssistants", {
                    url: "/SUP/CustomAssistants",
                    templateUrl: '/ClientApp/Planning/SUP/customAssistants/customAssistantsView.html?Ver=' + appVersion,
                    controller: 'CustomAssistantsController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Core/base/services/customAssistantsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/supportersService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/SUP/customAssistants/customAssistantsController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.compareSupporters", {
                    url: "/Supporter/compareSupporters/{type}/",
                    templateUrl: '/ClientApp/Planning/Supporter/compareSupporters/compareSupportersView.html?Ver=' + appVersion,
                    controller: 'CompareSupportersController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/callDayReportsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/Pageination/PageinationController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentVotesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Supporter/compareSupporters/compareSupportersController.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                .state("restricted.CreateProduct", {
                    url: "/LOG/CreateProduct",
                    templateUrl: '/ClientApp/Planning/LOG/Product/ProductEdition/ProductEditionView.html?Ver=' + appVersion,
                    controller: 'ProductEditionController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Product/ProductEdition/ProductEditionController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductAuthorService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/coursesService.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.ProductEdition", {
                    url: "/LOG/ProductEdition/{id:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Product/ProductEdition/ProductEditionView.html?Ver=' + appVersion,
                    controller: 'ProductEditionController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Product/ProductEdition/ProductEditionController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductAuthorService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/coursesService.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.Product", {
                    url: "/LOG/Product",
                    templateUrl: '/ClientApp/Planning/LOG/Product/ProductList/ProductListView.html?Ver=' + appVersion,
                    controller: 'ProductListController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Product/ProductList/ProductListController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductAuthorService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.ProductAuthor", {
                    url: "/LOG/ProductAuthor",
                    templateUrl: '/ClientApp/Planning/LOG/ProductAuthor/ProductAuthorView.html?Ver=' + appVersion,
                    controller: 'ProductAuthorController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/ProductAuthor/ProductAuthorController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductAuthorService.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.Inventory", {
                    url: "/LOG/Inventory/New/{StudentID:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/InventoryView.html?Ver=' + appVersion,
                    controller: 'InventoryController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/LOG/Inventory/InventoryController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductAuthorService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CityService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/coursesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/StudentsService.js?Ver=" + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.InventoryEdit", {
                    url: "/LOG/Inventory/Edit/{id:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/InventoryView.html?Ver=' + appVersion,
                    controller: 'InventoryController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/LOG/Inventory/InventoryController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductAuthorService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CityService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/coursesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/StudentsService.js?Ver=" + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.InventoryReadOnly", {
                    url: "/LOG/Inventory/Read/{id:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/ReadOnly/ReadOnlyView.html?Ver=' + appVersion,
                    controller: 'ReadOnlyController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/LOG/Inventory/ReadOnly/ReadOnlyController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductAuthorService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/studentsService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                //#region  Guarantee Pages
                .state("restricted.PackageGuarantee", {
                    url: "/LOG/PackageGuarantee/{id:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageGuarantee/PackageGuaranteeView.html?Ver=' + appVersion,
                    controller: 'PackageGuaranteeController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageGuarantee/PackageGuaranteeController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CityService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.EditPackageGuarantee", {
                    url: "/LOG/PackageGuarantee/Edit/{InvoiceID:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageGuarantee/PackageGuaranteeView.html?Ver=' + appVersion,
                    controller: 'PackageGuaranteeController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageGuarantee/PackageGuaranteeController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CityService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.ReadInvoiceGuarantee", {
                    url: "/LOG/InvoiceGuarantee/Read/{InvoiceID:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageGuarantee/ReadOnly/ReadOnlyView.html?Ver=' + appVersion,
                    controller: 'ReadGuaranteePageController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageGuarantee/ReadOnly/ReadOnlyController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.ModifyInvoiceGuarantee", {
                    url: "/LOG/InvoiceGuarantee/Modify/{Id:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageGuarantee/ReadOnly/ReadOnlyView.html?Ver=' + appVersion,
                    controller: 'ReadGuaranteePageController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageGuarantee/ReadOnly/ReadOnlyController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                //#endregion

                //#region PackageLeakage
                .state("restricted.PackageLeakage", {
                    url: "/LOG/PackageLeakage/{id:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageLeakage/PackageLeakageView.html?Ver=' + appVersion,
                    controller: 'PackageLeakageController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageLeakage/PackageLeakageController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CityService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.EditPackageLeakage", {
                    url: "/LOG/PackageLeakage/Edit/{InvoiceID:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageLeakage/PackageLeakageView.html?Ver=' + appVersion,
                    controller: 'PackageLeakageController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageLeakage/PackageLeakageController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CityService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.ReadInvoiceLeakage", {
                    url: "/LOG/ReadInvoiceLeakage/{InvoiceID:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageLeakage/ReadOnly/ReadOnlyView.html?Ver=' + appVersion,
                    controller: 'ReadLeakagePageController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageLeakage/ReadOnly/ReadOnlyController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.ModifyInvoiceLeakage", {
                    url: "/LOG/InvoiceLeakage/Modify/{Id:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageLeakage/ReadOnly/ReadOnlyView.html?Ver=' + appVersion,
                    controller: 'ReadLeakagePageController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageLeakage/ReadOnly/ReadOnlyController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                //#endregion

                //#region PackageReturning
                .state("restricted.PackageReturning", {
                    url: "/LOG/PackageReturning/{id:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageReturning/PackageReturningView.html?Ver=' + appVersion,
                    controller: 'PackageReturningController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageReturning/PackageReturningController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductAuthorService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/coursesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CityService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,



                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.EditPackageReturning", {
                    url: "/LOG/PackageReturning/Edit/{InvoiceID:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageReturning/PackageReturningView.html?Ver=' + appVersion,
                    controller: 'PackageReturningController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageReturning/PackageReturningController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductAuthorService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/coursesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CityService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.ReadInvoiceReturning", {
                    url: "/LOG/ReadInvoiceReturning/{InvoiceID:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageReturning/ReadOnly/ReadOnlyView.html?Ver=' + appVersion,
                    controller: 'ReadReturningController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageReturning/ReadOnly/ReadOnlyController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.ModifyInvoiceReturning", {
                    url: "/LOG/InvoiceReturning/Modify/{Id:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageReturning/ReadOnly/ReadOnlyView.html?Ver=' + appVersion,
                    controller: 'ReadReturningController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageReturning/ReadOnly/ReadOnlyController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                //#endregion

                //#region PackageCreditCharge
                .state("restricted.PackageCreditCharge", {
                    url: "/LOG/PackageCreditCharge/{id:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageCreditCharge/PackageCreditChargeView.html?Ver=' + appVersion,
                    controller: 'PackageCreditChargeConteoller',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageCreditCharge/PackageCreditChargeConteoller.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductAuthorService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/coursesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CityService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.EditPackageCreditCharge", {
                    url: "/LOG/PackageCreditCharge/Edit/{InvoiceID:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageCreditCharge/PackageCreditChargeView.html?Ver=' + appVersion,
                    controller: 'PackageCreditChargeConteoller',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageCreditCharge/PackageCreditChargeConteoller.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/ProductAuthorService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentBasesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/oldService/studentFieldsService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/services/coursesService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CityService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProvinceService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.ReadInvoiceCreditCharge", {
                    url: "/LOG/ReadInvoiceCreditCharge/{InvoiceID:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageCreditCharge/ReadOnly/ReadOnlyView.html?Ver=' + appVersion,
                    controller: 'ReadCreditChargePageController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageCreditCharge/ReadOnly/ReadOnlyController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.ModifyInvoiceCreditCharge", {
                    url: "/LOG/InvoiceCreditCharge/Modify/{Id:int}",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/PackageCreditCharge/ReadOnly/ReadOnlyView.html?Ver=' + appVersion,
                    controller: 'ReadCreditChargePageController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/PackageCreditCharge/ReadOnly/ReadOnlyController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoicePackageService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                //#endregion

                
                .state("restricted.WarehouseManagement", {
                    url: "/LOG/Inventory/WarehouseManagement",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/WarehouseManagement/WarehouseManagementView.html?Ver=' + appVersion,
                    controller: 'WarehouseManagementContoller',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/WarehouseManagement/WarehouseManagementContoller.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/DepotService.js?Ver=' + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.InvoiceModifyFinancial", {
                    url: "/LOG/Inventory/InvoiceModifyFinancial",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/InvoiceModifyFinancialRow/InvoiceModifyFinancialRowView.html?Ver=' + appVersion,
                    controller: 'InvoiceModifyFinancialRowController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/InvoiceModifyFinancialRow/InvoiceModifyFinancialRowController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/DepotService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.InvoiceModifyInventory", {
                    url: "/LOG/Inventory/InvoiceModifyInventory",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/InvoiceModifyInventory/InvoiceModifyInventoryView.html?Ver=' + appVersion,
                    controller: 'InvoiceModifyInventoryController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/InvoiceModifyInventory/InvoiceModifyInventoryController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/DepotService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/UserAddressService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/ProductService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/DeliveryType.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                .state("restricted.Invoices", {
                    url: "/LOG/Invoices",
                    templateUrl: '/ClientApp/Planning/LOG/Inventory/InoviceList/InoviceListView.html?Ver=' + appVersion,
                    controller: 'InvoiceListContoller',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Inventory/InoviceList/InoviceListController.js?Ver=' + appVersion,
                                '/build/ClientApp/Planning/Core/webapi/koosha/services/InvoiceService.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/InvoiceType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/InvoiceStatus.js?Ver=" + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })


                .state("restricted.PaymentChart", {
                    url: "/compare/PaymentChart",
                    templateUrl: '/ClientApp/Planning/payment/comparePayment/ComparePaymentView.html?Ver=' + appVersion,
                    controller: 'ComparePaymentController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/payment/comparePayment/ComparePaymentController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Directives/DatePickerForm/datePickerFormController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Directives/AutoComplete/AutoCompleteController.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/assistantsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/paymentsService.js?Ver=" + appVersion,
                                '/build/ClientApp/Planning/Directives/Pageination/PageinationController.js?Ver=' + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.AssistantList", {
                    url: "/LOG/Assistant",
                    templateUrl: '/ClientApp/Planning/LOG/Assistants/AssistantView.html?Ver=' + appVersion,
                    controller: 'AssistantController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Assistants/AssistantController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/AssistantService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.SudentPackageManager", {
                    url: "/LOG/Student",
                    templateUrl: '/ClientApp/Planning/LOG/Students/StudentView.html?Ver=' + appVersion,
                    controller: 'StudentController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/LOG/Students/StudentController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/StudentsService.js?Ver=" + appVersion,
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.QuestionBank", {
                    url: "/STU/QuestionBank",
                    templateUrl: '/ClientApp/Planning/STU/QuestionBank/QuestionBankView.html?Ver=' + appVersion,
                    controller: 'QuestionBankController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/STU/QuestionBank/QuestionBankController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/QuestionTypes.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/QuestionOptionsType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/QuestionLevelsType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/studentBasesService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/studentFieldsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CoursesService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CourseChapterService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/QuestionStoreService.js?Ver=" + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                .state("restricted.EditQouestion", {
                    url: "/STU/EditQouestion/{id:int}",
                    templateUrl: '/ClientApp/Planning/STU/QuestionBank/EditQouestion/EditQouestionView.html?Ver=' + appVersion,
                    controller: 'EditQouestionController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '/build/ClientApp/Planning/STU/QuestionBank/EditQouestion/EditQouestionController.js?Ver=' + appVersion,
                                "/build/ClientApp/Planning/Directives/FileUploader/fileUploader.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/QuestionTypes.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/QuestionOptionsType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/models/enums/QuestionLevelsType.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/studentBasesService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/base/services/studentFieldsService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CoursesService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/CourseChapterService.js?Ver=" + appVersion,
                                "/build/ClientApp/Planning/Core/webapi/koosha/services/QuestionStoreService.js?Ver=" + appVersion,

                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'انواع دلایل تاخیر'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })

                ;
            //services
        }
    ]);
