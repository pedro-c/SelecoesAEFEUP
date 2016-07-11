angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.jogos', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/jogos.html',
        controller: 'jogosCtrl'
      }
    }
  })

  .state('tabsController.calendario', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/calendario.html',
        controller: 'calendarioCtrl'
      }
    }
  })

  .state('tabsController.equipas', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/equipas.html',
        controller: 'equipasCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.opEs', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/opEs.html',
        controller: 'opEsCtrl'
      }
    }
  })

  .state('tabsController.andebolMasculino', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/andebolMasculino.html',
        controller: 'andebolMasculinoCtrl'
      }
    }
  })

  .state('tabsController.basquetebolFeminino', {
    url: '/page7',
    views: {
      'tab3': {
        templateUrl: 'templates/basquetebolFeminino.html',
        controller: 'basquetebolFemininoCtrl'
      }
    }
  })

  .state('tabsController.basquetebolMasculino', {
    url: '/page8',
    views: {
      'tab3': {
        templateUrl: 'templates/basquetebolMasculino.html',
        controller: 'basquetebolMasculinoCtrl'
      }
    }
  })

  .state('tabsController.futebol11Masculino', {
    url: '/page9',
    views: {
      'tab3': {
        templateUrl: 'templates/futebol11Masculino.html',
        controller: 'futebol11MasculinoCtrl'
      }
    }
  })

  .state('tabsController.futsalFeminino', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/futsalFeminino.html',
        controller: 'futsalFemininoCtrl'
      }
    }
  })

  .state('tabsController.futsalMasculino', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/futsalMasculino.html',
        controller: 'futsalMasculinoCtrl'
      }
    }
  })

  .state('tabsController.voleibolFeminino', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/voleibolFeminino.html',
        controller: 'voleibolFemininoCtrl'
      }
    }
  })

  .state('tabsController.voleibolMasculino', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/voleibolMasculino.html',
        controller: 'voleibolMasculinoCtrl'
      }
    }
  })

  .state('tabsController.rugby7', {
    url: '/page14',
    views: {
      'tab3': {
        templateUrl: 'templates/rugby7.html',
        controller: 'rugby7Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});