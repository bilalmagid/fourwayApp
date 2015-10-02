// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

.state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

.state('app.about-us', {
    url: '/about-us',
    views: {
      'menuContent': {
        templateUrl: 'templates/about-us.html'
      }
    }
  })

.state('app.our-promise', {
    url: '/our-promise',
    views: {
      'menuContent': {
        templateUrl: 'templates/our-promise.html'
      }
    }
  })
.state('app.sea', {
    url: '/sea',
    views: {
      'menuContent': {
        templateUrl: 'templates/sea.html'
      }
    }
  })

.state('app.air', {
    url: '/air',
    views: {
      'menuContent': {
        templateUrl: 'templates/air.html'
      }
    }
  })

.state('app.road-rail', {
    url: '/road-rail',
    views: {
      'menuContent': {
        templateUrl: 'templates/road-rail.html'
      }
    }
  })


  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

    .state('app.supply-chain', {
    url: '/supply-chain',
    views: {
      'menuContent': {
        templateUrl: 'templates/supply-chain.html'
      }
    }
  })

   .state('app.contact-us', {
    url: '/contact-us',
    views: {
      'menuContent': {
         controller: 'ContactUsCtrl',
        templateUrl: 'templates/contact-us.html'
      }
    }
  })
   

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
