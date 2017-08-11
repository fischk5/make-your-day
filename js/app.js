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

/* ----- Non-AngularJS code ----- */
// Navigate to home on click of the logo
function goHome() {
  window.location =  "#/";
}

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
     "review" : ["We had an incredible day.  Linda and her staff are second to none, and they were quietly making this day amazing."]},
     {"picture" : "images/testimonials/client_four.png",
      "name" : "Kevin F.",
      "location" : "New York, New York",
      "review" : ["There is nothing this team didn't think of.  I am impressed by Linda's charisma, service, and wisdom.  Without her many years of experience, our party would have been weird and quiet.", "I hate the quiet."]}
    ];

    dataFactory.getTestimonials = function() {
      return testimonials;
    }

    // Wedding package data
    var weddingPackages = [
      {"description" : "Consulting with Full Coordination",
       "price" : "$860",
       "services" : ["Unlimited phone & email communication from date of contract.",
                      "Meet in person 1 or 2 times before the event.",
                      "Two (2) Hours to attend and help coordinate Rehearsal.",
                      "Twelve (12) hours the day of the wedding, addtional hours will be billed at $40/Hr.",
                      "Detailed and individual service based on your needs for the day.",
                      "Anything else you might need :)"]
      },
      {"description" : "Consulting with Partial Coordination",
       "price" : "$250",
       "services" : ["Unlimited phone & email communication from date of contract.",
                      "Meet in person 1 or 2 times before the event.",
                      "Help coordinate timeline and execution of rehearsal, ceremony, and reception.",
                      "Detailed and individual service based on your needs for the day.",
                      "First seven hours included in price.  Additional hours billed at $40/hour."]
      },
      {"description" : "Consulting Only",
       "price" : "$40/hour",
       "services" : ["Unlimited phone & email communication from date of contract.",
                      "Meet in person prior to the event."]
      }
     ];

     // Shower package data
     var showerPackages = [
       {"description" : "Consulting, Plan, and Execute",
        "price" : "$600",
        "services" : ["Unlimited phone & email communication from date of contract.",
                       "Meet in person 1 or 2 times before the event.",
                       "Plan entire event, from nuts to bolts",
                       "Transfering gifts as needed throughout the event time",
                       "Six (6) hours the day of the wedding, addtional hours will be billed at $40/Hr.",
                       "Detailed and individual service based on your needs for the day.",
                       "Anything else you might need :)"]
       },
       {"description" : "Consulting and Plan",
        "price" : "$400",
        "services" : ["Unlimited phone & email communication from date of contract.",
                       "Meet in person 1 or 2 times before the event.",
                       "Plan entire event, from nuts to bolts",
                       "Transfering gifts as needed throughout the event time",
                       "Six (6) hours the day of the wedding, addtional hours will be billed at $40/Hr.",
                       "Detailed and individual service based on your needs for the day.",
                       "Anything else you might need :)"]
       },
       {"description" : "Consulting with Full Coordination",
        "price" : "$200",
        "services" : ["Unlimited phone & email communication from date of contract.",
                       "Meet in person 1 or 2 times before the event.",
                       "Six (6) hours the day of the wedding, addtional hours will be billed at $40/Hr.",
                       "Detailed and individual service based on your needs for the day.",
                       "Anything else you might need :)"]
       },
       {"description" : "Consulting with Partial Coordination",
        "price" : "$80",
        "services" : ["Unlimited phone & email communication from date of contract.",
                       "Meet in person 1 or 2 times before the event.",
                       "Detailed and individual service based on your needs for the day.",
                       "First hour hours included in price.  Additional hours billed at $30/hour."]
       },
       {"description" : "Consulting Only",
        "price" : "$30/hour",
        "services" : ["Unlimited phone & email communication from date of contract.",
                       "Meet in person prior to the event."]
       }
      ];

     // Party package data
     var partyPackages = [
       {"description" : "Consulting, Plan, and Execute",
        "price" : "$600",
        "services" : ["Unlimited phone & email communication from date of contract.",
                       "Meet in person 1 or 2 times before the event.",
                       "Plan entire event, from nuts to bolts",
                       "Transfering gifts as needed throughout the event time",
                       "Six (6) hours the day of the wedding, addtional hours will be billed at $40/Hr.",
                       "Detailed and individual service based on your needs for the day.",
                       "Anything else you might need :)"]
       },
       {"description" : "Consulting and Plan",
        "price" : "$400",
        "services" : ["Unlimited phone & email communication from date of contract.",
                       "Meet in person 1 or 2 times before the event.",
                       "Plan entire event, from nuts to bolts",
                       "Transfering gifts as needed throughout the event time",
                       "Six (6) hours the day of the wedding, addtional hours will be billed at $40/Hr.",
                       "Detailed and individual service based on your needs for the day.",
                       "Anything else you might need :)"]
       },
       {"description" : "Consulting with Full Coordination",
        "price" : "$200",
        "services" : ["Unlimited phone & email communication from date of contract.",
                       "Meet in person 1 or 2 times before the event.",
                       "Six (6) hours the day of the wedding, addtional hours will be billed at $40/Hr.",
                       "Detailed and individual service based on your needs for the day.",
                       "Anything else you might need :)"]
       },
       {"description" : "Consulting with Partial Coordination",
        "price" : "$80",
        "services" : ["Unlimited phone & email communication from date of contract.",
                       "Meet in person 1 or 2 times before the event.",
                       "Detailed and individual service based on your needs for the day.",
                       "First hour hours included in price.  Additional hours billed at $30/hour."]
       },
       {"description" : "Consulting Only",
        "price" : "$30/hour",
        "services" : ["Unlimited phone & email communication from date of contract.",
                       "Meet in person prior to the event."]
       }
      ];

     dataFactory.getWeddingPackages = function() {
       return weddingPackages;
     }

     dataFactory.getShowerPackages = function() {
       return showerPackages;
     }

     dataFactory.getPartyPackages = function() {
       return partyPackages;
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

// Initialize the controller used for the events
appModule.controller('EventController', ['$scope', '$location', 'dataFactory',
  function($scope, $location, dataFactory) {

    $scope.weddingPackages = dataFactory.getWeddingPackages();
    $scope.showerPackages = dataFactory.getShowerPackages();
    $scope.partyPackages = dataFactory.getPartyPackages();

    // Code for form control
    $(function() {
      $('input').on('change', function() {
        var input = $(this);
        if (input.val().length) {
          input.addClass('populated');
        } else {
          input.removeClass('populated');
        }
      });

      // setTimeout(function() {
      //   $('#fname').trigger('focus');
      // }, 500);
    });

    // End code for form control

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
    controller: 'EventController',
    templateUrl: 'partials/services/wedding.html'
  })
  .when("/services/shower", { // shower inquiry page
    controller: 'EventController',
    templateUrl: 'partials/services/shower.html'
  })
  .when("/services/birthday", { // birthday inquiry page
    controller: 'EventController',
    templateUrl: 'partials/services/birthday.html'
  })
  .otherwise({redirectTo: "/"});
})
