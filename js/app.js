/*
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

MAKE YOUR DAY - A Linda Standke Company ---

Project Description: Create a new website for Make Your Day
Objective: Provide client with a company website to....
-List levels of service
-Reach target audience (brides)
-Provide user friendly interface
Technology: jQuery, Bootstrap, AngularJS, Google Maps API
Version Control: GIT, available on Github

Written by Kevin Fischer

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
*/

/* -----SETUP ANGULAR MODULE----- */

// Initialize the module with dependency ngRoute
var appModule = angular.module('application', ['ngRoute']);

// Configure appModule to be okay with outside url activity
appModule.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self'
  ]);
});

/*  -----SETUP ANGULAR FACTORY dataFactory----- */

// Initialize the factory
appModule.factory('dataFactory', ['$http',
  function($http) {

    // init the factory object to be returned
    var dataFactory = {};

    // Finally, return the factory object
    return dataFactory;
  }
]);

/* -----SETUP ANGULAR CONTROLLERS----- */

// Initialize the home controller
appModule.controller('HomeController', ['$scope', '$location', 'dataFactory',
  function($scope, $location, dataFactory) {

    // $scope.goToStore = function() {
    //   window.location =  "#/store";
    // };
    //
    // $scope.locations = dataFactory.getLocations();
    //
    // $scope.setCurrentCity = function(parentIndex, index) {
    //   dataFactory.setCurrentCity(parentIndex, index);
    // }

  }
]);

/*  -----SETUP ANGULAR ROUTING----- */

// Configure the routes available to the module
appModule.config(function($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when("/", { // Home page
    controller: 'HomeController',
    templateUrl: 'partials/home.html'
  })
  .when("/store/", { // Store information page
    controller: 'StoreController',
    templateUrl: 'partials/store.html'
  })
  .when("/change-location", { // change store
    controller: 'HomeController',
    templateUrl: 'partials/change-location.html'
  })
  .otherwise({redirectTo: "/"});
})
