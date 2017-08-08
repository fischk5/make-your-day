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

    // Carousel information
    var carousel = [
      {"source" : "images/wedding.png",
       "captionTop" : "Your Event, Your Way",
       "captionBottom" : "Flexible services for your wedding, bridal shower, baby shower, or any other event"},
      {"source" : "images/planning.png",
       "captionTop" : "Your Coordinator, Your Day",
       "captionBottom" : "With you before, during, and after your special event"},
      {"source" : "images/shower.png",
       "captionTop" : "Your Needs, Your Say",
       "captionBottom" : "Professional services tailored to your specific needs"},
      {"source" : "images/planning.png",
       "captionTop" : "Make Your Day",
       "captionBottom" : "Here to ask for a witty tagline"},
    ];

    dataFactory.getCarouselStart = function() {
      return carousel[0];
    }

    dataFactory.getCarousel = function() {
      var carouselWithoutFirst = [];
      for (var i=1; i <carousel.length; i++) {
        carouselWithoutFirst.push(carousel[i]);
      }
      return carouselWithoutFirst;
    }

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

    $scope.carousel = dataFactory.getCarousel();

    $scope.carouselStart = dataFactory.getCarouselStart();

    // Set the carousel interval to 5.5 seconds
    $('.carousel').carousel({
      interval: 5500,
      pause: "none"
    });

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
  .when("/services", { // services information page
    controller: 'HomeController',
    templateUrl: 'partials/services.html'
  })
  .when("/testimonials", { // testimonials information page
    controller: 'HomeController',
    templateUrl: 'partials/testimonials.html'
  })
  .when("/faq", { // faq information page
    controller: 'HomeController',
    templateUrl: 'partials/faq.html'
  })
  .when("/contact", { // contact information page
    controller: 'HomeController',
    templateUrl: 'partials/contact.html'
  })
  .otherwise({redirectTo: "/"});
})
