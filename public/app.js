var runForCauseApp = angular.module('runForCauseApp', ['ui.bootstrap', 'ngRoute', 'runnersForm', 'projects']);

// routes
runForCauseApp.config(function($routeProvider) {

    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/dashboard/dashboard.html',
            controller  : 'mainController'
        })
        
        .when('/dashboard', {
            templateUrl : 'views/dashboard/dashboard.html',
            controller  : 'mainController'
        })

        // route for the Projects view
        .when('/projects', {
            templateUrl : 'views/projects/projects.html',
            controller  : 'projectsController'
        })

        // routes for the Forms views
            .when('/runners-form', {
                templateUrl : 'views/forms/runners_registration_form.html',
                controller  : 'runnersFormController'
         })
                
        .when('/supporters-form', {
            templateUrl : 'views/forms/supporters_registration_form.html',
            controller  : 'supportersFormController'
        })
        
        // routes for the Data views
        .when('/runners', {
            templateUrl : 'views/data/runners.html',
            controller  : 'runnersController'
         })
                
        .when('/supporters', {
            templateUrl : 'views/data/supporters.html',
            controller  : 'supportersController'
        })
        
        // route for the Reports view
        .when('/reports', {
            templateUrl : 'views/reports/reports.html',
            controller  : 'reportsController'
        })

        .otherwise({
                redirectTo: 'views/dashboard.html'
        });
});
