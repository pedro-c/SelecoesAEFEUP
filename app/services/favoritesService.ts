import {Injectable} from '@angular/core';
import {ModalitiesFactory} from './modalitiesFactory';
import {File} from 'ionic-native';
import {Device} from 'ionic-native';

const FAVORITES_FILENAME: string = "favorites.dat";

@Injectable()
export class FavoritesService {
    private favorites: boolean[];
    private modalities: any[];
    private static instance: FavoritesService;
    private static isCreating: boolean = false;

    constructor(private modalitiesFactory: ModalitiesFactory, private file: File, private device: Device) {
        if (!FavoritesService.isCreating)
            throw new Error("You cannot use new in singletons. Use getInstance() instead.");

        this.modalities = modalitiesFactory.getModalities();
        this.favorites = [];

        this.loadFavorites();
    }

    public static getInstance(): FavoritesService {
        if (FavoritesService.instance == null) {
            FavoritesService.isCreating = true;
            //TODO: Not sure if this is the correct way to make this
            FavoritesService.instance = new FavoritesService(new ModalitiesFactory(), new File(), new Device());
            FavoritesService.isCreating = false;
        }

        return FavoritesService.instance;
    }

    public getFavorites(): any[] {
        return this.favorites;
    }

    /*public isTeamOnFavorites(id : number) {
      for(var i = 0; i < this.favorites.length; i++) {
        if(favorites[id])
      }
    }*/

    private loadFavorites() {
        var filePath: string;
        this.recreateFavorites();
      /*  if (this.device.platform == "iOS") { //If the platform is iOS, save the data in a directory synced with iCloud.
            filePath = cordova.file.dataDirectory.syncedDataDirectory;
        } else {
            filePath = cordova.file.dataDirectory;
        }

        filePath += FAVORITES_FILENAME;

        window.resolveLocalFileSystemURL(filePath, function(fileEntry : any) {
          fileEntry.file(function (file) {
            var reader = new FileReader();

            reader.onloadend = function (event) {
              //FavoritesService.getInstance().setFavorites(new Uint8Array(event.target.result));
              console.log(new Uint8Array(event.target.result));
            }

            reader.readAsArrayBuffer(file);
          }, function() {
            console.log("Error reading from file.");
          });
        }, this.recreateFavorites);*/
    }

    private recreateFavorites(): void {
        for (var modality of this.modalities) {
            this.favorites.push(false);
        }
    }

    private setFavorites(newFavorites : boolean[]) : void {
      this.favorites = newFavorites;
    }
}
