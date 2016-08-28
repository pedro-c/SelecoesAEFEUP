import {Injectable} from '@angular/core';
import {ModalitiesFactory} from './modalitiesFactory';
import {File, Device} from 'ionic-native';
import {Modality} from '../classes/modality';
import {Set, util} from '../../node_modules/typescript-collections';

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
        this.favorites.remove(modalityId);
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

        let favorites = this.favorites;

        File.readAsText(filePath, FAVORITES_FILENAME).then(function(result) {
          //TODO: Deserialize the saved set.
            let temp : Set<number> = new Set<number>();
            temp = JSON.parse(result);
            console.log(temp);
            favorites.clear();
            //favorites.union(<Set<number>>temp);
            console.log(favorites);
        }).catch(function(error) {
            console.log("Error reading favorites file. " + error.message);
            favorites.clear();
        });
    }

    public saveFavorites() {
        console.log("Saving favorites...");
        var filePath: string;

        console.log((<any>cordova).file === undefined);

        //If the platform is iOS, save the data in a directory synced with iCloud.
        if (this.device.platform == "iOS") {
            filePath = (<any>cordova).file.dataDirectory.syncedDataDirectory;
        } else {
            filePath = (<any>cordova).file.dataDirectory;
        }

        let toWrite = this.favorites;

        //Creates the file to write in and writes the favorites Set.
        File.createFile(filePath, FAVORITES_FILENAME, true).then(function(fileEntry) {

            fileEntry.createWriter(function(fileWriter) {
                fileWriter.onwriteend = function() {
                    console.log("Finished writing to favorites file.");
                };

                fileWriter.onerror = function(error) {
                    console.log("Error writing to favorites file. " + error.toString());
                }

                fileWriter.write(toWrite);
            });

        }).catch(function(error) {
            console.log("The favorites file could not be created. " + error.message);
        });

        /*
        File.writeFile is not available as of the writing of this code
        Because of that, a workaround is necessary.
        Leave this code commented as it is supposed to work when
        File.writeFile is implemented


        //Checks if the favorites file exists
        //If it does, it is overwritten
        //If it doesn't, it is created and then written to
        File.checkFile(filePath, FAVORITES_FILENAME).catch(function(error) {
            //If the file was not found
            File.createFile(filePath, FAVORITES_FILENAME, false).then(function() {
            }).catch(function(error) {
                console.log("The favorites file could not be created. " + error.message);
            });
        }).then(function() {
            //write to file
            console.log("Escreve pro ficheiro");
            File.writeFile(filePath, FAVORITES_FILENAME, util.makeString(this.favorites), true);
        });*/

        //filePath += FAVORITES_FILENAME;

        /*(<any>window).resolveLocalFileSystemURL(filePath, function(fileEntry: any) {
            console.log("Creating writer...");
            fileEntry.createWriter(function(fileWriter: any, favorites: Set<number>) {
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
        });*/
    }
}
