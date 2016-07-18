

export class Modality {
  private static nextId : number = 0;
  private id : number;

  constructor(private name : string) {
    this.id = Modality.nextId;
    Modality.nextId++;
  }

  public getId() : number {
    return this.id;
  }

  public getName() : string {
    return this.name;
  }
}
