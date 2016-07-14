import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MatchesFactory} from '../../services/matchesFactory';
import {EntitiesFactory} from '../../services/entitiesFactory';

@Component({
  templateUrl: 'build/pages/matchDetails/matchDetails.html',
  providers : [MatchesFactory, EntitiesFactory]
})

export class MatchDetailsPage {
  private match : any;
  private getEntityById : any;

  constructor(private navController : NavController, private navParams : NavParams,
              private matchesFactory : MatchesFactory, private entitiesFactory : EntitiesFactory) {
     this.match = matchesFactory.getMatchById(navParams.get('matchId'));
     this.getEntityById = entitiesFactory.getEntityById;
  }
}
