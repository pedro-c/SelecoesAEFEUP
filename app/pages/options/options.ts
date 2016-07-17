import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FavoritesPage} from '../favorites/favorites';

@Component({
  templateUrl: 'build/pages/options/options.html'
})

export class OptionsPage {
  constructor(private navController: NavController) {

  }

  openFavoritesPage() {
    this.navController.push(FavoritesPage);
  }
}
