angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

    .state('tabsController.games', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/games.html',
        controller: 'gamesCtrl'
      }
    }
  })

  .state('tabsController.calendar', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })

  .state('tabsController.teams', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/teams.html',
        controller: 'teamsCtrl'
      }
    }
  })

  .state('tabsController.options', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/options.html',
        controller: 'optionsCtrl'
      }
    }
  })

  .state('tabsController.teamDetails', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/teamDetails.html',
        controller: 'teamDetailCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});