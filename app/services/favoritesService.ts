import {Injectable} from '@angular/core';
import {ModalitiesFactory} from './modalitiesFactory';


@Injectable()
export class FavoritesService {
    private favorites: boolean[];
    private modalities: any[];
    private static instance: FavoritesService;
    private static isCreating: boolean = false;

    constructor(private modalitiesFactory: ModalitiesFactory) {
        if(!FavoritesService.isCreating)
          throw new Error("You cannot use new in singletons. Use getInstance() instead.");

        this.modalities = modalitiesFactory.getModalities();
        this.favorites = [];

        for (var modality of this.modalities) {
            this.favorites.push(false);
        }
    }

    static getInstance() {
        if (FavoritesService.instance == null) {
            FavoritesService.isCreating = true;
            //TODO: Not sure if this is the correct way to make this
            FavoritesService.instance = new FavoritesService(new ModalitiesFactory());
            FavoritesService.isCreating = false;
        }

        return FavoritesService.instance;
    }

    getFavorites() {
        return this.favorites;
    }
}
