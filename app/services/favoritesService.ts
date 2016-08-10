import {Injectable} from '@angular/core';
import {ModalitiesFactory} from './modalitiesFactory';
import {File, Device} from 'ionic-native';
import {Modality} from '../classes/modality';
import {Set} from '../../node_modules/typescript-collections';

const FAVORITES_FILENAME: string = "favorites.dat";

@Injectable()
export class FavoritesService {
  private favorites: Set<number>;
  private modalities: Modality[];
  private refreshResults: boolean = false;

  private static instance: FavoritesService;
  private static isCreating: boolean = false;

  constructor(private modalitiesFactory: ModalitiesFactory, private file: File, private device: Device) {
    if (!FavoritesService.isCreating)
      throw new Error("You cannot use new in singletons. Use getInstance() instead.");

    this.modalities = modalitiesFactory.getModalities();
    this.favorites = new Set<number>();

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

  public isModalityOnFavorites(id: number) {
    return this.favorites.contains(id);
  }

  public addFavorite(modalityId: number) {
    this.refreshResults = true;
    this.favorites.add(modalityId);
  }

  public removeFavorite(modalityId: number) {
    this.refreshResults = true;
    this.favorites.add(modalityId);
  }

  public refreshMatches(): boolean {
    return this.refreshResults;
  }

  public loadFavorites() {
    console.log("Loading favorites...");
    var filePath: string;

    if (this.device.platform == "iOS") { //If the platform is iOS, save the data in a directory synced with iCloud.
      filePath = (<any>cordova).file.dataDirectory.syncedDataDirectory;
    } else {
      filePath = (<any>cordova).file.dataDirectory;
    }

    filePath += FAVORITES_FILENAME;

    (<any>window).resolveLocalFileSystemURL(filePath, function(fileEntry: any) {
      fileEntry.file(function(file) {
        var reader: FileReader = new FileReader();

        reader.onloadend = function() {
          //FavoritesService.getInstance().setFavorites(new Uint8Array(event.target.result));
          console.log(this.result);
        }

        reader.readAsArrayBuffer(file);
      }, function() {
        console.log("Error reading from file.");
      });
    }, function() {
      console.log("Error finding file.");
    });
  }

  public saveFavorites() {
    console.log("Saving favorites...");
    var filePath: string;

    console.log((<any>cordova).file === undefined);

    if (this.device.platform == "iOS") { //If the platform is iOS, save the data in a directory synced with iCloud.
      filePath = (<any>cordova).file.dataDirectory.syncedDataDirectory;
    } else {
      filePath = (<any>cordova).file.dataDirectory;
    }

    filePath += FAVORITES_FILENAME;

    (<any>window).resolveLocalFileSystemURL(filePath, function(fileEntry: any) {
      console.log("Creating writer...");
      fileEntry.createWriter(function(fileWriter: any, favorites : Set<number>) {
        console.log("Writer created.");

        fileWriter.onwriteend = function() {
          console.log("Favorites succesfully saved.");
        };

        fileWriter.onerror = function(error) {
          console.log("Error saving favorites. (" + error.toString() + ")");
        };

        fileWriter.write(favorites);
      });
    }, function(error) {
      console.log(error.toString());
    });
  }
}
