angular.module('app.controllers', [])
  
.controller('matchesCtrl', function($scope, Matches, NextMatches, Entities) {
    $scope.lastMatches = Matches.getLastMatches(1);
    $scope.getEntityById = Entities.getEntityById;
    $scope.nextMatches = Matches.getNextMatches(2);
})
   
.controller('calendarCtrl', function($scope) {

})
   
.controller('teamsCtrl', function($scope, Teams) {
    $scope.teams = Teams.getTeams();
})

.controller('teamDetailsCtrl', function($scope, $stateParams, Teams) {
    $scope.team = Teams.getTeam($stateParams.teamId);
})
      
.controller('optionsCtrl', function($scope, Teams) {
    $scope.teams = Teams.getTeams();
})

.controller('matchDetailsCtrl', function($scope, $stateParams, Matches, Entities) {
    $scope.match = Matches.getMatchById($stateParams.matchId);
    $scope.getEntityById = Entities.getEntityById;
}); 