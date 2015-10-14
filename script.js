// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            .when('/getInvolved', {
                templateUrl : 'pages/getInvolved.html',
                controller  : 'getInvolvedController'
            })

            .when('/theTeam', {
                templateUrl : 'pages/theTeam.html',
                controller  : 'theTeamController'
            });

            .when('/workshop', {
                templateUrl : 'pages/workshop.html',
                controller  : 'workshopController'
            });

            .when('/theShows', {
                templateUrl : 'pages/theShows.html',
                controller  : 'theShowsController'
            });

            .when('/schedule', {
                templateUrl : 'pages/schedule.html',
                controller  : 'scheduleController'
            });

            .when('/pastEvents', {
                templateUrl : 'pages/pastEvents.html',
                controller  : 'pastEventsController'
            });

            .when('/contactUs', {
                templateUrl : 'pages/contactUs.html',
                controller  : 'contactUsController'
            });

    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('getInvolvedController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('theTeamController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

 	scotchApp.controller('workshopController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    scotchApp.controller('theShowsController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    scotchApp.controller('scheduleController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    scotchApp.controller('pastEvents', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    scotchApp.controller('contactUsController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
