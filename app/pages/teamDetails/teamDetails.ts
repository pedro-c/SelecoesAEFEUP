import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ModalitiesFactory} from '../../services/modalitiesFactory';
import {Modality} from '../../classes/modality';

@Component({
  templateUrl: 'build/pages/teams/teams.html',
  providers : [ModalitiesFactory]
})

export class TeamDetailsPage {
  private modality : Modality;

  constructor(private navController: NavController, private navParams : NavParams,
    private modalitiesFactory : ModalitiesFactory) {
      this.modality = modalitiesFactory.getModalityById(navParams.get('modalityId'));
  }
}
