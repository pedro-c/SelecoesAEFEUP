import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MatchesFactory} from '../../services/matchesFactory';
import {EntitiesFactory} from '../../services/entitiesFactory';
import {MatchDetailsPage} from '../matchDetails/matchDetails';

@Component({
  templateUrl: 'build/pages/matches/matches.html',
  providers: [MatchesFactory, EntitiesFactory]
})
export class MatchesPage {
  private lastMatches : any[];
  private nextMatches : any[];
  private getEntityById : any;

  constructor(private navController: NavController, private matchesFactory: MatchesFactory, private entitiesFactory: EntitiesFactory) {
    this.lastMatches = matchesFactory.getLastMatches(1);
    this.nextMatches = matchesFactory.getNextMatches(1);
    this.getEntityById = entitiesFactory.getEntityById;
  }

  openMatchDetails(match : any) {
    this.navController.push(MatchDetailsPage, {
      matchId : match.id
    });
  }
}
