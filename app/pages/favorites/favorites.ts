import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalitiesFactory} from '../../services/modalitiesFactory';
import {FavoritesService} from '../../services/favoritesService';
import {Modality} from '../../classes/modality';
import {Set} from '../../../node_modules/typescript-collections';

@Component({
    templateUrl: 'build/pages/favorites/favorites.html',
    providers: [ModalitiesFactory, FavoritesService]
})

export class FavoritesPage {
    private modalities: Modality[];
    private favoritesService: FavoritesService;

    //FIXME: Figure out a better way to do this.
    //Needed because right now there is no checked directive in ion-toggles,
    //so the toggles can't be initialized with the correct value
    private toggles: boolean[];

    constructor(private navController: NavController, private modalitiesFactory: ModalitiesFactory) {
        this.modalities = modalitiesFactory.getModalities();
        this.favoritesService = FavoritesService.getInstance();
        this.toggles = [];

        //Initialize the toggles with the values from the service.
        for (let i: number = 0; i < this.modalities.length; i++)
            this.toggles.push(this.favoritesService.isModalityOnFavorites(i));
    }

    //Refresh favorites not working properly
    refreshFavorites() : void {
      for (let i: number = 0; i < this.modalities.length; i++)
          this.toggles[i] = this.favoritesService.isModalityOnFavorites(i);
    }

    toggled(modalityId: number, event: any): void {
        if (event) {
            this.favoritesService.addFavorite(modalityId);
            this.toggles[modalityId] = true;
        } else {
            this.favoritesService.removeFavorite(modalityId);
            this.toggles[modalityId] = false;
        }
    }

    save() : void {
      this.favoritesService.saveFavorites();
    }

    load() : void {
      this.favoritesService.loadFavorites();
      console.log(this.toggles);
      this.refreshFavorites();
      console.log(this.toggles);
    }

    ionViewWillEnter() : void {
      console.log("Ion View Will Enter");
      this.refreshFavorites();
    }
}
