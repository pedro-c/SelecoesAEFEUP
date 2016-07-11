angular.module('app.controllers', [])
  
.controller('gamesCtrl', function($scope, LastResults, NextMatches) {
    $scope.lastResults = LastResults;
    $scope.nextMatches = nextMatches;
})
   
.controller('calendarCtrl', function($scope) {

})
   
.controller('teamsCtrl', function($scope, Teams) {
    $scope.teams = Teams;
})

.controller('teamDetailCtrl', function($scope, CurrentTeam) {

})
      
.controller('optionsCtrl', function($scope, Teams) {
    $scope.teams = Teams;
}); 