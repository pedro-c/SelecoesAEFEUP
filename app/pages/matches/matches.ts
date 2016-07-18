import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MatchesFactory} from '../../services/matchesFactory';
import {MatchDetailsPage} from '../matchDetails/matchDetails';
import {Match, MatchStatus} from '../../classes/match';

@Component({
  templateUrl: 'build/pages/matches/matches.html',
  providers: [MatchesFactory]
})
export class MatchesPage {
  private lastMatches : Match[];
  private nextMatches : Match[];

  constructor(private navController: NavController, private matchesFactory: MatchesFactory) {

  }

  openMatchDetails(match : Match) {
    this.navController.push(MatchDetailsPage, {
      matchId : match.getId()
    });
  }

  //Updates favorites everytime the view is entered
  ionViewWillEnter() : void {
    this.lastMatches = this.matchesFactory.getLastMatches();
    this.nextMatches = this.matchesFactory.getNextMatches();
  }
}
