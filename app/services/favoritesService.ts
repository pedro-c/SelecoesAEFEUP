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
        this.favorites.remove(modalityId);
    }

    public refreshMatches(): boolean {
        return this.refreshResults;
    }

    public loadFavorites() {
        console.log("Loading favorites...");
        var filePath: string;

        //If the platform is iOS, save the data in a directory synced with iCloud.
        if (this.device.platform == "iOS") {
            filePath = (<any>cordova).file.dataDirectory.syncedDataDirectory;
        } else {
            filePath = (<any>cordova).file.dataDirectory;
        }

        let favorites: Set<number> = this.favorites;

        File.readAsText(filePath, FAVORITES_FILENAME).then(function(result) {
            FavoritesService.deserializeIntoSet(result, favorites);
        }).catch(function(error) {
            console.log("Error reading favorites file. " + error.message);
            favorites.clear();
        });
    }

    private static deserializeIntoSet(json: string, set: Set<number>) {
        let temp = JSON.parse(json).dictionary.table;
        set.clear();

        //for .. in gives the properties name
        //then we acess them to retrieve its key
        //and add it to the set.
        for (let x in temp) {
            set.add(temp[x].key);
        }
    }

    public saveFavorites() {
        console.log("Saving favorites...");
        var filePath: string;

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
    }
}
