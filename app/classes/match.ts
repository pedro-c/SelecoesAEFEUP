import {ModalitiesFactory} from '../services/modalitiesFactory';
import {EntitiesFactory} from '../services/entitiesFactory';

export enum MatchStatus {
    FINISHED,
    UPCOMING,
    ONGOING
};

export class Match {
    private static nextId: number = 0;
    private id: number;

    constructor(private date: Date, private modalityId: number, private teamId1: number, private score1: number,
        private teamId2: number, private score2: number, private local: string) {
        this.id = Match.nextId;
        Match.nextId++;
    }

    public getModalityId() : number {
      return this.modalityId;
    }

    public getModalityName() : string {
      var modalitiesFactory : ModalitiesFactory = new ModalitiesFactory();
      return modalitiesFactory.getModalityById(this.modalityId).getName();
    }

    public getLocal() : string {
      return this.local;
    }

    public getTeam1ShortName() : string {
      var entitiesFactory : EntitiesFactory = new EntitiesFactory();
      return entitiesFactory.getEntityById(this.teamId1).shortName;
    }

    public getScore1() : number {
      return this.score1;
    }

    public getTeam2ShortName() : string {
      var entitiesFactory : EntitiesFactory = new EntitiesFactory();
      return entitiesFactory.getEntityById(this.teamId2).shortName;
    }

    public getScore2() : number {
      return this.score2;
    }

    public getDate() : Date {
      return this.date;
    }

    public getStatus(): MatchStatus {
      //TODO: Use ONGOING status.
        if (this.date.getTime() < Date.now()) {
            return MatchStatus.FINISHED;
        } else {
            return MatchStatus.UPCOMING;
        }
    }

    public getId() : number {
      return this.id;
    }
}
