import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalitiesFactory} from '../../services/modalitiesFactory';
import {TeamDetailsPage} from '../teamDetails/teamDetails';
import {Modality} from '../../classes/modality';

@Component({
  templateUrl: 'build/pages/teams/teams.html',
  providers : [ModalitiesFactory]
})

export class TeamsPage {
  private modalities : Modality[];

  constructor(private navController: NavController, private modalitiesFactory : ModalitiesFactory) {
      this.modalities = modalitiesFactory.getModalities();
  }

  openModalityDetails(modality : any) {
    this.navController.push(TeamDetailsPage, {
      modalityId : modality.id
    });
  }

  favorite(modality : any) {
    console.log("Oi");
  }
}
