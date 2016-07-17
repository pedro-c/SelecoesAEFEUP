import {Injectable} from '@angular/core';
import {FavoritesService} from './favoritesService';

const matches : any[] = [
  {
    id: 0,
    status: 'finished',
    teamType: 'Andebol Masculino',
    teamId1: 0, score1: 1,
    teamId2: 1, score2: 0,
    local: 'Pavilhão Desportivo Luís Falcão',
    date: new Date(2016, 7, 12, 14, 0)
  },
  {
    id: 1,
    status: 'upcoming',
    teamType: 'Futsal Feminino',
    teamId1: 0, score1: null,
    teamId2: 1, score2: null,
    local: 'Pavilhão Desportivo Luís Falcão',
    date: new Date(2016, 7, 14, 14, 0)
  },
  {
    id: 2,
    status: 'upcoming',
    teamType: 'Futsal Feminino',
    teamId1: 0, score1: null,
    teamId2: 2, score2: null,
    local: 'Campo FADEUP',
    date: new Date(2016, 7, 15, 17, 0)
  },
  {
    id: 3,
    status: 'upcoming',
    teamType: 'Futsal Feminino',
    teamId1: 0, score1: null,
    teamId2: 2, score2: null,
    local: 'Pavilhão Desportivo Luís Falcão',
    date: new Date(2016, 7, 14, 18, 30)
  }
];

@Injectable()
export class MatchesFactory {
  private favoritesService;

  constructor() {
    this.favoritesService = FavoritesService.getInstance();
  }

  getLastMatches(quantity) {
    //Gets the index of the last played game
    var i;
    for (i = matches.length - 1; i >= 0; i--) {
      if (matches[i].date.getTime() < Date.now()) {
        break;
      }
    }

    i++;

    return matches.slice(i - quantity + 1, quantity);
  };

  getMatchById(id) {
    return matches[id];
  };

  getNextMatches(quantity) {
    //Gets the index of the first match to be played
    var i;
    var nextMatches : any[];
    for (i = matches.length - 1; i >= 0; i--) {
      if (matches[i].date.getTime() < Date.now()) {
        break;
      }
    }

    i++;

    /*for(; i < matches.length; i++) {
      if(this.FavoritesService.)
    }*/

    return matches.slice(i, i + quantity);
  };
}
