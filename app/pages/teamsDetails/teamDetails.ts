import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ModalitiesFactory} from '../../services/modalitiesFactory';

@Component({
  templateUrl: 'build/pages/teamDetails/teamDetails.html',
  providers : [ModalitiesFactory]
})

export class TeamDetailsPage {
  private modality : any;

  constructor(private navController: NavController, private navParams : NavParams,
    private modalitiesFactory : ModalitiesFactory) {
      this.modality = modalitiesFactory.getModalityById(navParams.get('modalityId'));
  }
}
