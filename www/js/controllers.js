angular.module('app.controllers', [])
  
.controller('gamesCtrl', function($scope, LastResults, NextMatches) {
    $scope.lastResults = LastResults;
    $scope.nextMatches = nextMatches;
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
}); 