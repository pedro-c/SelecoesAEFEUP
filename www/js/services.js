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
}])

.factory('Entities', [function() {

    entities = [
        {
            id: 0,
            shortName: 'AEFEUP'
        },
        {
            id: 1,
            shortName: 'AEFMUP'
        },
        {
            id: 2,
            shortName: 'AEFADEUP'
        },
        {
            id: 3,
            shortName: 'AEISEP'
        }
    ]

    getEntities = function() {
        return entities;
    };

    getEntityById = function(id) {
        return entities[id];
    };

    return {
        getEntities,
        getEntityById
    };
}])

.factory('Matches', [function() {

    matches = [
        {
            id: 0,
            status: 'finished',
            teamType: 'Andebol Masculino',
            teamId1: 0, score1: 1,
            teamId2: 1, score2: 0,
            local: 'Pavilhão Desportivo Luís Falcão',
            date: new Date(2016, 07, 12, 14, 00)
        },
        {
            id: 1,
            status: 'upcoming',
            teamType: 'Futsal Feminino',
            teamId1: 0, score1: null,
            teamId2: 1, score2: null,
            local: 'Pavilhão Desportivo Luís Falcão',
            date: new Date(2016, 07, 14, 14, 00)
        },
        {
            id: 2,
            status: 'upcoming',
            teamType: 'Futsal Feminino',
            teamId1: 0, score1: null,
            teamId2: 2, score2: null,
            local: 'Campo FADEUP',
            date: new Date(2016, 07, 15, 17, 00)
        },
        {
            id: 3,
            status: 'upcoming',
            teamType: 'Futsal Feminino',
            teamId1: 0, score1: null,
            teamId2: 2, score2: null,
            local: 'Pavilhão Desportivo Luís Falcão',
            date: new Date(2016, 07, 14, 18, 30)
        }
    ];

    getLastMatches = function(quantity) {
        //Gets the index of the last played game
        var i;
        for(i = matches.length - 1; i >= 0; i--) {
            if(matches[i].date < Date.now()) {
                break;
            }
        }

        i++;

        return matches.slice(i - quantity + 1, quantity);
    };

    getMatchById = function(id) {
        return matches[id];
    };

    getNextMatches = function(quantity) {
        //Gets the index of the first match to be played
        var i;
        for(i = matches.length - 1; i >= 0; i--) {
            if(matches[i].date < Date.now()) {
                break;
            }
        }

        i++;

        return matches.slice(i, i + quantity);
    };

    return {
        getLastMatches,
        getMatchById,
        getNextMatches
    };

}]);

