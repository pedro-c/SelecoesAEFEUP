import {Injectable} from '@angular/core';
import {FavoritesService} from './favoritesService';
import {Match, MatchStatus} from '../classes/match';

const matches: Match[] = [
    new Match(new Date(2016, 7, 12, 14, 0), 0, 0, 1, 1, 0,
        'Pavilhão Desportivo Luís Falcão'),
    new Match(new Date(2016, 7, 14, 14, 0), 2, 0, null, 1, null,
        'Pavilhão Desportivo Luís Falcão'),
    new Match(new Date(2016, 8, 20, 17, 0), 4, 0, null, 2, null,
        'Campo FADEUP'),
    new Match(new Date(2016, 9, 19, 18, 30), 7, 0, null, 2, null,
        'Pavilhão Desportivo Luís Falcão')
];

const LAST_MATCHES_LENGTH: number = 3;
const NEXT_MATCHES_LENGTH: number = 3;

@Injectable()
export class MatchesFactory {
    private favoritesService;
    private lastMatches: Match[];
    private nextMatches: Match[];

    constructor() {
        this.favoritesService = FavoritesService.getInstance();
    }

    private refreshLastMatches() {
        //Gets the index of the last played game
        let i: number;
        for (i = matches.length - 1; i >= 0; i--) {
            if (matches[i].getStatus() == MatchStatus.FINISHED) {
                break;
            }
        }

        i++;

        this.lastMatches = [];
        let quantity: number = LAST_MATCHES_LENGTH;

        while (i > 0 && quantity > 0) {
            if (this.favoritesService.isModalityOnFavorites(matches[i].getModalityId()))
                this.lastMatches.unshift(matches[i]);
            i--;
            quantity--;
        }
    }

    public getLastMatches() {
        if (FavoritesService.getInstance().refreshMatches())
            this.refreshLastMatches();
        return this.lastMatches;
    };

    public getMatchById(id) {
        return matches[id];
    };

    private refreshNextMatches() {
        //Gets the index of the first match to be played
        let i: number;
        for (i = matches.length - 1; i >= 0; i--) {
            if (matches[i].getStatus() == MatchStatus.FINISHED) {
                break;
            }
        }

        i++;
        i++;

        this.nextMatches = [];
        let quantity: number = NEXT_MATCHES_LENGTH;

        while (i < matches.length && quantity > 0) {
            if (this.favoritesService.isModalityOnFavorites(matches[i].getModalityId()))
                this.nextMatches.push(matches[i]);
            i++;
            quantity--;
        }
    }

    getNextMatches() {
        if (FavoritesService.getInstance().refreshMatches())
            this.refreshNextMatches();
        return this.nextMatches;
    };
}
