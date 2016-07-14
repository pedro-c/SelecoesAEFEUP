import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalitiesFactory} from '../../services/modalitiesFactory';

@Component({
  templateUrl: 'build/pages/options/options.html',
  providers: [ModalitiesFactory]
})

export class OptionsPage {
  private modalities : any[];

  constructor(private navController: NavController, private modalitiesFactory : ModalitiesFactory) {
    this.modalities = modalitiesFactory.getModalities();
  }
}
