import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalitiesFactory} from '../../services/modalitiesFactory';
import {TeamDetailsPage} from '../teamsDetails/teamDetails';

@Component({
  templateUrl: 'build/pages/teams/teams.html',
  providers : [ModalitiesFactory]
})

export class TeamsPage {
  private modalities : any[];

  constructor(private navController: NavController, private modalitiesFactory : ModalitiesFactory) {
      this.modalities = modalitiesFactory.getModalities();
  }

  openModality(modality : any) {
    this.navController.push(TeamDetailsPage, {
      modalityId : modality.id
    });
  }
}
