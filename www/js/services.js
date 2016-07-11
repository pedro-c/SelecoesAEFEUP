angular.module('app.services', [])

.factory('Teams', [function(){
    teams = [
        {
            id: '0', name: 'Andebol Masculino'
        },
        {
            id: '1', name: 'Basquetebol Feminino'
        },
        {
            id: '2', name: 'Basquetebol Masculino'
        },
        {
            id: '3', name: 'Futebol 11 Masculino'
        },
        {
            id: '4', name: 'Futsal Feminino'
        },
        {
            id: '5', name: 'Futsal Masculino'
        },
        {
            id: '6', name: 'Voleibol Feminino'
        },
        {
            id: '7', name: 'Voleibol Masculino'
        },
        {
            id: '8', name: 'Rugby 7'
        }
    ];

    getTeam = function(id) {
        return teams[id];
    }

    getTeams = function() {
        return teams;
    }

    return {
        getTeam, getTeams
    };
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

