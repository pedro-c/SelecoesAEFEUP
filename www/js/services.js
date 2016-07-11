angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('LastResults', [function(){

    lastResults = [
        { 
            team1: 'Andebol Masculino AEFEUP', score1: '1',
            team2: 'Andebol Masculino AEFMUP', score2: '0'
        },
        {
            team1: 'Futebol 11 Masculino AEFEUP', score1: '3',
            team2: 'Futebol 11 Masculino AEISEP', score2: '0'
        },
        {
            team1: 'Voleibol Feminino AEFEUP', score1: '2',
            team2: 'Voleibol Feminino AEFADEUP', score2: '1'
        }
    ];

    return lastResults;
}])

.factory('NextMatches', [function() {
    nextMatches = [
        {
            team1: 'Futsal Feminino AEFEUP',
            team2: 'Futsal Feminino AEFMUP',
            place: 'Pavilhão Desportivo Luís Falcão'
        },
        {
            team1: 'Rugby 7 AEFEUP',
            team2: 'Rugby 7 AEFADEUP',
            place: 'Campo FADEUP'
        },
        {
            team1: 'Basquetebol Feminino AEFEUP',
            team2: 'Basquetebol Feminino AEFADEUP',
            place: 'Pavilhão Desportivo Luís Falcão'
        }
    ];

   return nextMatches; 
}]);

