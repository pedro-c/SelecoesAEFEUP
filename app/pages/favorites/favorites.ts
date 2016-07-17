import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalitiesFactory} from '../../services/modalitiesFactory';
import {FavoritesService} from '../../services/favoritesService';

@Component({
  templateUrl: 'build/pages/favorites/favorites.html',
  providers: [ModalitiesFactory, FavoritesService]
})

export class FavoritesPage {
  private modalities : any[];
  private favorites : any[];

  constructor(private navController: NavController, private modalitiesFactory : ModalitiesFactory) {
      this.modalities = modalitiesFactory.getModalities();
      this.favorites = FavoritesService.getInstance().getFavorites();
  }
}
