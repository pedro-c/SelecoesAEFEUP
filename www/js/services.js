angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('LastResults', [function(){

    lastResults = [
        { 
            teamType: 'Andebol Masculino',
            place: 'Pavilhão Desportivo Luís Falcão',
            team1: 'AEFEUP', score1: '1',
            team2: 'AEFMUP', score2: '0'
        },
        {
            teamType: 'Futebol 11 Masculino',
            place: 'Campo FADEUP',
            team1: 'AEFEUP', score1: '3',
            team2: 'AEISEP', score2: '0'
        },
        {
            teamType: 'Voleibol Feminino',
            place: 'Pavilhão Desportivo Luís Falcão',
            team1: 'AEFEUP', score1: '2',
            team2: 'AEFADEUP', score2: '1'
        }
    ];

    return lastResults;
}])

.factory('NextMatches', [function() {
    nextMatches = [
        {
            teamType: 'Futsal Feminino',
            team1: 'AEFEUP',
            team2: 'AEFMUP',
            place: 'Pavilhão Desportivo Luís Falcão',
            date: '12/07/2016',
            time: '14h00'
        },
        {
            teamType: 'Futsal Feminino',
            team1: 'AEFEUP',
            team2: 'AEFADEUP',
            place: 'Campo FADEUP',
            date: '13/07/2016',
            time: '17h00'
        },
        {
            teamType: 'Futsal Feminino',
            team1: 'AEFEUP',
            team2: 'AEFADEUP',
            place: 'Pavilhão Desportivo Luís Falcão',
            date: '14/07/2016',
            time: '18h30'
        }
    ];

   return nextMatches; 
}]);

