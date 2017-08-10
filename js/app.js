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
      {"source" : "images/planning.png",
       "captionTop" : "Make Your Day",
       "captionBottom" : "Your vision becomes a reality"},
      {"source" : "images/wedding.png",
       "captionTop" : "Your Event, Your Way",
       "captionBottom" : "Flexible services for your wedding, bridal shower, baby shower, or any other event"},
      {"source" : "images/planning.png",
       "captionTop" : "Your Coordinator, Your Day",
       "captionBottom" : "With you before, during, and after your special event"},
      {"source" : "images/shower.png",
       "captionTop" : "Your Needs, Your Say",
       "captionBottom" : "Professional services tailored to your specific needs"}
    ];

    // Mission Statement - to customize my services to meet your needs - that's how I can make your day great
    // Find new pictures for carousel
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

    // Testimonials information
    var testimonials = [
      {"picture" : "images/testimonials/client_one.png",
       "name" : "Emily N.",
       "location" : "Minneapolis, Minnesota",
       "review" : ["Linda was great.  Make Your Day really changed everything that I thought I knew about service.  They were on time, professional, not too cynical, and well-behaved."]},
     {"picture" : "images/testimonials/client_two.png",
      "name" : "Rob & Kelsey E.",
      "location" : "Dubuque, Iowa",
      "review" : ["We hired Make Your Day on the recommendation of a friend and it was one of the best decisions we made for the entire wedding.  I didn't realize how talented the staff were and I certainly did not expect a photobooth to show up!"]},
    {"picture" : "images/testimonials/client_three.png",
     "name" : "Jack B.",
     "location" : "Los Angeles, California",
     "review" : ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est diam, lobortis vel eros in, molestie feugiat odio. Aliquam sed elementum justo. Sed vel suscipit ex, rutrum sagittis metus. Donec euismod massa nunc, at tempus velit aliquam ut. Aliquam placerat ante vel erat lacinia eleifend. Praesent facilisis eros non mi commodo auctor. Phasellus orci enim, iaculis et eleifend a, rutrum eget sem. Suspendisse facilisis facilisis eros, ut sodales tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."]},
     {"picture" : "images/testimonials/client_four.png",
      "name" : "Kevin F.",
      "location" : "New York, New York",
      "review" : ["Mauris feugiat purus nibh. Proin vestibulum tellus ipsum, eu maximus felis dignissim non. Integer sit amet lorem orci. Vestibulum et posuere ligula. In condimentum mauris nec lacus varius interdum. Donec pulvinar sit amet augue ac viverra. Fusce id libero a sem scelerisque semper. Duis fermentum, tortor eu gravida suscipit, massa tortor sagittis est, eu vulputate eros metus nec magna. Nam convallis aliquam massa, vel blandit massa aliquam id. Morbi sed mauris libero. Donec efficitur nec eros vitae ultricies. Nam mollis ullamcorper nibh, eget viverra turpis lacinia in. Cras auctor et urna eu fringilla. Nunc venenatis, lorem ac malesuada pulvinar, mauris nisl interdum neque, a vulputate enim augue eu erat.  Ut venenatis eget erat ac mattis. Proin at maximus tortor, finibus finibus odio. Duis fringilla faucibus pulvinar. Pellentesque lobortis enim orci, eget feugiat libero venenatis at. Integer porttitor, arcu in feugiat ultrices, ipsum metus luctus ipsum, non sollicitud in tortor tortor eget turpis.", "Quisque mattis massa in neque sodales, sit amet placerat nibh iaculis. Donec pulvinar vitae tellus non bibendum. Duis viverra massa a vestibulum cursus. Fusce in mollis urna, non malesuada nunc. Aenean et pellentesque velit. Integer vitae elit ligula. Fusce consectetur ante at enim posuere, vitae malesuada massa sagittis. Praesent at arcu lorem. Donec ultrices quis libero non pharetra."]}
    ];

    dataFactory.getTestimonials = function() {
      return testimonials;
    }

    // Finally, return the factory object
    return dataFactory;
  }
]);

/* -----SETUP ANGULAR CONTROLLERS----- */

// Initialize the home controller
appModule.controller('HomeController', ['$scope', '$location', 'dataFactory',
  function($scope, $location, dataFactory) {

    // Returns the entires in carousel except the first one
    // since the first one requires special formatting
    $scope.carousel = dataFactory.getCarousel();

    // Return the first entry in the carousel which requires special formatting
    $scope.carouselStart = dataFactory.getCarouselStart();

    // Set the carousel interval to 9.5 seconds
    $('.carousel').carousel({
      interval: 7500,
      pause: "none"
    });

  }
]);

// Initialize the testimony controller
appModule.controller('TestimonyController', ['$scope', '$location', 'dataFactory',
  function($scope, $location, dataFactory) {

    // Return the testimony object array
    $scope.testimonials = dataFactory.getTestimonials();

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
    controller: 'TestimonyController',
    templateUrl: 'partials/testimonials.html'
  })
  .when("/faq", { // faq information page
    controller: 'HomeController',
    templateUrl: 'partials/faq.html'
  })
  .when("/services/wedding", { // wedding inquiry page
    controller: 'HomeController',
    templateUrl: 'partials/services/wedding.html'
  })
  .otherwise({redirectTo: "/"});
})
